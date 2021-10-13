import React from 'react';
import styles from './createdat.css';
import moment from 'moment';

interface ICreadetAtProps {
  createdAt: number,
}

export function CreatedAt({createdAt}: ICreadetAtProps) {
  const date = new Date(new Date().getTime() - createdAt);

  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>Опубликовано </span>
      {moment(date.toString()).locale('ru').fromNow()}
    </span>
  );
}

