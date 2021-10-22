import React from 'react';
import {useToken} from '../../hooks/useToken';
import styles from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode; 
}

export function Layout({children}: ILayoutProps) {
  useToken();
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
