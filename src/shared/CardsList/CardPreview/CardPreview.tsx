import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/users/4540442/screenshots/16558334/media/c4a086e3cf000c7309d3b9aa226539a2.png" className={styles.previewImg} />
    </div>
  );
}
