import React from 'react';
import {withKey} from '../../../../utils/react/with-key';
import {MenuListItem} from '../MenuListItem';
import {ListItem} from '../MenuListItem/types';
import styles from './cardmenulist.css';

interface ICardMenu {
  menuItems: ListItem[],
}

export function CardMenuList({menuItems}: ICardMenu) {
  const items = menuItems.map(withKey('id')(MenuListItem))

  return (
    <ul className={styles.list}>
      {items}
      <li className={styles.close}>Закрыть</li>
    </ul>
  )
}
