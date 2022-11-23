import React from 'react'
import styles from './GridList.module.css'

// interface GridListProps {
//     children: React.ReactNode
// }

const GridList = ({children}: React.PropsWithChildren) => {
  return (
    <div className={styles.root}>
        {children}
    </div>
  )
}

export default GridList