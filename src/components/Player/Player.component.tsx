import React from "react";
import usePlayer from "~/hooks/usePlayer.hook";
import styles from "./Player.module.css";
import PlayButton from "./components/PlayButton/PlayButton.component";
import MuteButton from "./components/MuteButton/MuteButton.component";
import ProgressBar from "./components/ProgressBar/ProgressBar.component";

const Player = () => {
  const { state } = usePlayer();


  return (
    <div className={styles.root}>
      <div className={styles.player}>
        <PlayButton />
        <div className="flex-grow">
          <p className="text-sm mb-1.5">{state.meta?.name}</p>
          <ProgressBar />
          <p className="text-ui2 mt-1">{state.meta?.artists}</p>
        </div>
        <MuteButton />
      </div>
    </div>
  )
};

export default Player;
