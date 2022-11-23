import React from 'react'
import styles from './GridList.module.css'

const GridList = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

export default GridList