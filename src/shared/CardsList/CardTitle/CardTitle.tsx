import React from 'react';
import styles from './cardtitle.css';

interface ICardTitleProps {
  postLink: string,
  postTitle: string,
}

export function CardTitle({postLink, postTitle}: ICardTitleProps) {
  return (
    <h2 className={styles.title}>
      <a href={postLink} className={styles.postLink}>{postTitle}</a>
    </h2>
  );
}
