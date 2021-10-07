import React from 'react';
import {generateId, generateRandomString} from '../../../utils/react/generate-random-index';
import {Dropdown} from '../../Dropdown';
import styles from './cardmenu.css';
import {Comment, Complain, Ellipsis, Hide, Save, Share} from '../../Icons'
import {CardMenuList} from './CardMenuList';

const MENU = [
  {
    label: "Комментарий",
    icon: <Comment />,
  },
  {
    label: "Поделиться",
    icon: <Share />,
  },
  {
    label: "Скрыть",
    icon: <Hide />,
    showOnMobile: true,
  },
  {
    label: "Сохранить",
    icon: <Save />,
  },
  {
    label: "Пожаловаться",
    icon: <Complain />,
    showOnMobile: true,
  }
].map(generateId);

export function CardMenu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={<button className={styles.menuButton}><Ellipsis /></button>}>
        <CardMenuList menuItems={MENU} postId={generateRandomString()} />
      </Dropdown>
    </div>
  );
}

