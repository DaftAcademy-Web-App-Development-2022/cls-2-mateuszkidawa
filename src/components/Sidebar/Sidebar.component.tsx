import React from 'react'
import User from '../User/User.component';
import styles from './Sidebar.module.css'
import userData from '../../data/userData.json'
import Form from '../Form/Form.component';

const Sidebar = () => {
    const handleLogout = (name: string, id: string) => {
      console.log("logout", name, id);
    }
  
    return (
      <div className={styles.root}>
        <div className={styles.top}>
          <User name={userData.name} email={userData.email} image={userData.url} logout={() => handleLogout(userData.name, userData.id)}/>
        </div>
        <div className={styles.center}>
          <Form />
        </div>
      </div>
    )
  }

export default Sidebar