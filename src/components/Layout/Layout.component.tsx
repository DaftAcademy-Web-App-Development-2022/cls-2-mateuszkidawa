import React from "react";
import { Fragment } from "react";
import Player from "../Player/Player.component";
import Sidebar from "../Sidebar/Sidebar.component";

import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <Sidebar />
      </header>
      <main className={styles.main}> {children} </main>
      <footer className={styles.footer}> <Player /> </footer>
    </Fragment>
  );
};

export default Layout;
