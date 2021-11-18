import React from 'react';
import {Link} from 'react-router-dom';
import styles from './cardtitle.css';

interface ICardTitleProps {
  postLink: string,
  postTitle: string,
}

export function CardTitle({postLink, postTitle}: ICardTitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postTitle}`} className={styles.postLink}>
          {postTitle}
      </Link>
    </h2>
  );
}
