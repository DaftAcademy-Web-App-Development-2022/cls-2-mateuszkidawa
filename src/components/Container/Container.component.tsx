import React from 'react'
import styles from './Container.module.css'
const Container = ({children}: React.PropsWithChildren) => {
  return (
    <div className={styles.root}>
        {children}
    </div>
  )
}

export default Container