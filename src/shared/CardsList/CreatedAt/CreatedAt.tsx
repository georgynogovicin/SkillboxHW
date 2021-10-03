import React from 'react';
import styles from './createdat.css';

interface ICreadetAtProps {
  createdAt: string,
}

export function CreatedAt({createdAt}: ICreadetAtProps) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>Опубликовано </span>
      {createdAt}
    </span>
  );
}
