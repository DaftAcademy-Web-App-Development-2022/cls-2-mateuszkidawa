import React from 'react'
import usePlayer from "~/hooks/usePlayer.hook";
import styles from "./MuteButton.module.css";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";


const MuteButton = () => {
    const { state,actions } = usePlayer();

    const handleMuteButton = () => state.muted ? actions.unmute() : actions.mute();
  return (
    <button className={styles.button} onClick={handleMuteButton}>
      {state.muted ? (
        <SpeakerXMarkIcon className={styles.icon} />
      ) : (
        <SpeakerWaveIcon className={styles.icon} />
      )}
    </button>
  )
}

export default MuteButton