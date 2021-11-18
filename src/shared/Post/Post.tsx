import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {useOutsideClick} from '../CardsList/hooks/useOutsideClick';
import {CommentFormContainer} from '../CommentFormContainer';
import {Comments} from '../Comments';
import styles from './post.css';

const userName = "John Doe";

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const onClose = () => {
    history.push("/");
  }
  
  useOutsideClick(ref, onClose)

  return (
    <div className={styles.modal} ref={ref}>
      <h2>Header</h2>
      <div className={styles.content}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam blanditiis libero ipsa voluptatibus ex, debitis perspiciatis fuga autem molestiae culpa numquam consectetur voluptates, facere nulla earum accusamus soluta perferendis.</p>
      </div>
      <CommentFormContainer initialValue={userName}/>
      <Comments />
    </div>
  )
}
