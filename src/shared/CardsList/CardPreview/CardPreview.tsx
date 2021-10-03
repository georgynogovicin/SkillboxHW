import React from 'react';
import styles from './cardpreview.css';

interface ICardPreviewProps {
  previewUrl: string
  previewAlt: string
}

export function CardPreview({previewUrl, previewAlt}: ICardPreviewProps) {
  return (
    <div className={styles.preview}>
      <img src={previewUrl} alt={previewAlt} className={styles.previewImg} />
    </div>
  );
}
