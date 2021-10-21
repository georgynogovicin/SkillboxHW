import React from 'react';
import {CommentItem} from './CommentItem';
import styles from './comments.css';

export function Comments() {
  return (
    <div className={styles.comments}>
      <CommentItem />
    </div>
  );
}

