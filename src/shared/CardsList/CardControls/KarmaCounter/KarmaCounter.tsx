import React from 'react';
import {ButtonDown} from './ButtonDown';
import {ButtonUp} from './ButtonUp';
import styles from './karmacounter.css';

export function KarmaCounter() {
  return (
    <div className={styles.karmaCounter}>
      <ButtonUp />
      <span className={styles.karmaValue}>123</span>
      <ButtonDown />
    </div>
  );
}
