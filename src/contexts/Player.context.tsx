import React, { createContext, useMemo, useReducer, useRef } from "react";


type Action = {
  type: "SET_META",
  payload: Meta
} | {
  type: "PLAY"
} | {
  type: "PAUSE"
}

type Meta = {
  id?: string;
  src?: string;
  name?: string;
  artists?: string[];
}

type State = {
  meta?: Meta;
  playing: boolean;
}

type Actions = {
  play: (meta?: Meta) => void;
  pause: () => void;
  seek: (time: number) => void;
}

const initialPlayerState: State = {
  playing: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_META": {
      return { ...state, meta: action.payload };
    }

    case "PLAY": {
      return { ...state, playing: true };
    }

    case "PAUSE": {
      return { ...state, playing: false };
    }

    default:
      return initialPlayerState;
  }
};

export const PlayerContext = createContext<{ state: State, actions: Actions } | null>(null);

const PlayerProvider = (props: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialPlayerState);
  const playerRef = useRef<HTMLAudioElement>(null);

  const actions = useMemo(
    () => ({
      play(meta?: Meta) {
        if (playerRef.current) {
          dispatch({ type: "PLAY" });

          if (meta) {
            dispatch({ type: "SET_META", payload: meta });

            if (meta.src && playerRef.current.currentSrc !== meta.src) {
              playerRef.current.src = meta.src;
              playerRef.current.load();
              playerRef.current.pause();
              playerRef.current.currentTime = 0;
            }
          }

          playerRef.current.play();
        }
      },
      pause: () => {
        if (playerRef.current) {
          dispatch({ type: "PAUSE" });
          playerRef.current?.pause();
        }
      },
      seek: (time: number) => {
        if (playerRef.current) {
          playerRef.current.currentTime = time;
        }
      }
    }),
    []
  );

  const value = React.useMemo(() => ({ state, actions }), [state, actions]);

  return (
    <>
      <PlayerContext.Provider value={value} {...props} />
    </>

  );
}

export default PlayerProvider;