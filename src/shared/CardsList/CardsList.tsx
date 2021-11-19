import React, {useRef} from 'react';
import {EColor} from '../../constants/constants';
import styles from './cardslist.css';
import {usePostData} from './hooks/usePostData';
import {Text} from "../Text";
import {Card} from './Card';

export function CardsList() {
  const bottomOfList = useRef<HTMLDivElement>(null);
  const {state: {posts, loading, error, loadingCount}, onLoadClick} = usePostData(bottomOfList);

  const items = posts.map(({data}) => {
    const {id, ...rest} = data;
    return (
      <Card key={id} post={rest} />
    )
  });

  return (
    <ul className={styles.cardsList}>
      {
        posts.length === 0 && !loading && !error && (
          <div style={{textAlign: "center"}}>
            <Text size={20} color={EColor.orage}>
              Нет ни одного поста
            </Text>
          </div>
        )
      }
      {items}
      {loading && <div style={{textAlign: "center"}}><Text size={20} color={EColor.grey99}>...Загрузка</Text></div>}
      {
        error && (
          <div role="alert" style={{textAlign: "center"}}>
            <Text size={20} color={EColor.orage}>
              {error.message}
            </Text>
          </div>
        )
      }
      <div ref={bottomOfList} />
      {loadingCount >= 3 && <button className={styles.button} onClick={onLoadClick}>...Загрузить еще</button>}
    </ul>
  );
}
