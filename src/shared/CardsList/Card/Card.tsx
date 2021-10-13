import React from 'react';
import styles from './card.css';
import {MetaData} from '../MetaData';
import {CardTitle} from '../CardTitle';
import {CardPreview} from '../CardPreview';
import {CardMenu} from '../CardMenu';
import {CardControls} from '../CardControls';
import {Post} from '../hooks/usePostData';
interface ICardProps {
  post: Post;
}

export function Card({post}: ICardProps) {
  const {created_utc, author, permalink, title, url, thumbnail} = post;

  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <MetaData username={author} userLink={permalink} createdAt={created_utc}/>
        <CardTitle postLink={url} postTitle={title}/>
      </div>
      <CardPreview previewUrl={thumbnail} previewAlt={title}/>
      <CardMenu />
      <CardControls />
    </li>
  );
}
