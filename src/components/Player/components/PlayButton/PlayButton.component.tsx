import React from "react";
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";
import styles from "./PlayButton.module.css";

const PlayButton = () => {
  const { state, actions } = usePlayer();

  const handleButtonOnClick = () =>
    state.playing
      ? actions.pause()
      : actions.play({
          id: trackData.id,
          name: trackData.name,
          src: trackData.preview_url,
          artists: trackData.artists.map((artist) => artist.name),
        });
        
  const buttonIcon = state.playing ? (
    <PauseIcon className={styles.icon} />
  ) : (
    <PlayIcon className={styles.icon} />
  );

  return (
    <button onClick={handleButtonOnClick} className={styles.button}>
      {buttonIcon}
    </button>
  );
};

export default PlayButton;
