import React, {useContext} from 'react';
import {postContext} from '../context/postContext';
import {Card} from './Card';
import styles from './cardslist.css';

export function CardsList() {
  const posts = useContext(postContext);

  return (
    <ul className={styles.cardsList}>
      {
        posts.map(({data}) => {
          const {id, ...rest} = data;
          return (
            <Card key={id} post={rest}/>
          )
        })
      }
    </ul>
  );
}
