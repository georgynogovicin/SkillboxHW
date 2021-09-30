import React from 'react';
import {SaveButton} from '../SaveButton';
import {ShareButton} from '../ShareButton';
import styles from './cardactions.css';

export function CardActions() {
  return (
    <div className={styles.actions}>
      <ShareButton />
      <SaveButton />
    </div>
  );
}
