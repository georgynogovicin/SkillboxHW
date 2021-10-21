import React, {useRef} from 'react';
import {generateRandomString} from '../../../utils/react/generate-random-index';
import {CardMenuList} from '../../CardsList/CardMenu/CardMenuList';
import {ListItem} from '../../CardsList/CardMenu/MenuListItem/types';
import {useOutsideClick} from '../../CardsList/hooks/useOutsideClick';
import styles from './dropdownlist.css';

interface DropDownListProps {
  items: ListItem[],
  onClose(): void,
}

export function DropDownList(props: DropDownListProps) {
  const ref = useRef(null);

  useOutsideClick(ref, props.onClose)

  return (
    <div className={styles.listContainer} ref={ref}>
      <div className={styles.list} onClick={props.onClose}>
        <CardMenuList menuItems={props.items} postId={generateRandomString()} />
      </div>
    </div>
  );
}
