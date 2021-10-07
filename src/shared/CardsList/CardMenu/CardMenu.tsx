import React from 'react';
<<<<<<< HEAD
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
=======
import {generateId, generateRandomString} from '../../../utils/react/generate-random-index';
import {Dropdown} from '../../Dropdown';
import styles from './cardmenu.css';
import {Comment, Complain, Ellipsis, Hide, Save, Share} from '../../Icons'
import {CardMenuList} from './CardMenuList';
>>>>>>> Added card-menu-list, card-menu-list-item

const MENU = [
  {
    label: "Комментарий",
<<<<<<< HEAD
    icon: <Comment />,
=======
    icon: <Comment/>,
>>>>>>> Added card-menu-list, card-menu-list-item
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
<<<<<<< HEAD
      <Dropdown button={<MenuButtonEllipsis />}>
        <CardMenuList menuItems={MENU} />
=======
      <Dropdown button={<button className={styles.menuButton}><Ellipsis /></button>}>
        <CardMenuList menuItems={MENU} postId={generateRandomString()} />
>>>>>>> Added card-menu-list, card-menu-list-item
      </Dropdown>
    </div>
  );
}

