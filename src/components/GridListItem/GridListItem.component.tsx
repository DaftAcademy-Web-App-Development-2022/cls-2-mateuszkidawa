import Link from 'next/link'
import React from 'react'
import { PlaylistModelWithId } from '~/models/playlist.model'
import styles from './GridListItem.module.css'

interface GridListItemProps {
    item: PlaylistModelWithId
}

const GridListItem = ({item}: GridListItemProps) => {
  return (
    <li className={styles.root}>
    <div className={styles.playlist}>
      <div
        className={styles.playlistColorSign}
        style={{ backgroundColor: item?.color || "#000000" }}
      />

      <Link
        href={`/playlist/${item.id}`}
        className={styles.playlistName}
      >
        {item.name}
      </Link>
    </div>

    <span className={styles.ownerName}>{item.owner}</span>
  </li>
  )
}

export default GridListItem