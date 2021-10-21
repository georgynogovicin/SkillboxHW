import React, {useRef} from 'react';
import {useOutsideClick} from '../CardsList/hooks/useOutsideClick';
import {CommentFormContainer} from '../CommentFormContainer';
import {Comments} from '../Comments';
import styles from './post.css';

interface IPost {
  onClose(): void;
}

export function Post({onClose}: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, onClose)

  return (
    <div className={styles.modal} ref={ref}>
      <h2>Header</h2>
      <div className={styles.content}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.</p>
      </div>
      <CommentFormContainer />
      <Comments />
    </div>
  )
}
