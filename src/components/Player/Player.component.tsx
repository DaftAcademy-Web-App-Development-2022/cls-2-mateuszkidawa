import React from "react";
import usePlayer from "~/hooks/usePlayer.hook";
import styles from "./Player.module.css";
import PlayButton from "./components/PlayButton/PlayButton.component";

const Player = () => {
  const { state } = usePlayer();


  return (
    <div className={styles.root}>
      <div className={styles.player}>
        <PlayButton />
        <div className="flex-grow">
          <p className="text-sm mb-1.5">{state.meta?.name}</p>
          <p className="text-ui2 mt-1">{state.meta?.artists}</p>
        </div>
      </div>
    </div>
  )
};

export default Player;
