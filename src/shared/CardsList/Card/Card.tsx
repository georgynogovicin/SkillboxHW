import React from 'react';
import styles from './card.css';
import {MetaData} from '../MetaData';
import {CardTitle} from '../CardTitle';
import {CardPreview} from '../CardPreview';
import {CardMenu} from '../CardMenu';
import {CardControls} from '../CardControls';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <MetaData />
        <CardTitle />
      </div>
      <CardPreview />
      <CardMenu />
      <CardControls />
    </li>
  );
}
