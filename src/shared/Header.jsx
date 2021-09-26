import {hot} from "react-hot-loader/root"
import React from 'react';
import styles from "./Header.scss";

function HeaderComponent () {
  return (
    <header>
      <h1 className={styles.h1}>Hello world</h1>
    </header>
  )
}

export const Header = hot(HeaderComponent);