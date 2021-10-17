import React, {useState} from 'react';
import {pipe} from '../../../utils/js/pipe';
import {preventDefault, stopPropagation} from '../../../utils/react/prevent-default';
import {Portal} from '../../Portal';
import {Post} from '../../Post';
import styles from './cardtitle.css';

interface ICardTitleProps {
  postLink: string,
  postTitle: string,
}

export function CardTitle({postLink, postTitle}: ICardTitleProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsModalOpen(true);
  }

  return (
    <h2 className={styles.title}>
      <a className={styles.postLink} onClick={pipe(preventDefault, stopPropagation, handleClick)}>{postTitle}</a>

      {isModalOpen && (
        <Portal>
          <Post onClose={() => setIsModalOpen(false)}/>
        </Portal>
      )}
    </h2>
  );
}
