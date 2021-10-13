import React, {SyntheticEvent} from 'react';
import styles from './cardpreview.css';
interface ICardPreviewProps {
  previewUrl: string
  previewAlt: string
}

const errorSrc = 'https://www.onlygfx.com/wp-content/uploads/2017/12/empty-stamp-1-1024x1024.png';

export function CardPreview({previewUrl, previewAlt}: ICardPreviewProps) {
  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = errorSrc;
  };
  return (
    <div className={styles.preview}>
      <img src={previewUrl} alt={previewAlt} className={styles.previewImg} onError={handleError}/>
    </div>
  );
}
