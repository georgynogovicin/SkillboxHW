import React from 'react';
import {generateId, generateRandomString} from '../../../utils/react/generate-random-index';
import {Dropdown} from '../../Dropdown';
import styles from './cardmenu.css';
import {Ellipsis} from '../../Icons'
import {CardMenuList} from './CardMenuList';
import {EIconNames} from '../../../constants/constants';
import {Icon} from '../../Icon';

const MENU = [
  {
    label: "Комментарий",
    icon: EIconNames.Comment,
  },
  {
    label: "Поделиться",
    icon: EIconNames.Share,
  },
  {
    label: "Скрыть",
    icon: EIconNames.Hide,
    showOnMobile: true,
  },
  {
    label: "Сохранить",
    icon: EIconNames.Save,
  },
  {
    label: "Пожаловаться",
    icon: EIconNames.Complain,
    showOnMobile: true,
  }
].map(generateId);

export function CardMenu() {
  const button = (
    <button className={styles.menuButton}>
      <Icon name={EIconNames.Ellipsis}/>
    </button>
  )

  return (
    <div className={styles.menu}>
      <Dropdown button={button} items={MENU} />
    </div>
  );
}

