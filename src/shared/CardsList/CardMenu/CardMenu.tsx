import React from 'react';
import {generateId} from '../../../utils/react/generate-random-index';
import {Dropdown} from '../../Dropdown';
import styles from './cardmenu.css';
import {CardMenuList} from './CardMenuList';
import {MenuButtonEllipsis} from './MenuButtonEllipsis';
import {Comment} from '../../Icons/Comment';
import {Share} from '../../Icons/Share';
import {Hide} from '../../Icons/Hide';
import {Save} from '../../Icons/Save';
import {Complain} from '../../Icons/Complain';

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
      <Dropdown button={<MenuButtonEllipsis />}>
        <CardMenuList menuItems={MENU} />
      </Dropdown>
    </div>
  );
}

