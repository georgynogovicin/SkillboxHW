import React from 'react';
import {NOOP} from '../../../../utils/js/noop';
import styles from './menulistitem.css';

interface IMenuListItemProps {
  label: string;
  icon?: React.ReactNode;
  showOnMobile?: boolean;
  onClick?: () => void;
}

export function MenuListItem({label, icon, showOnMobile, onClick = NOOP}: IMenuListItemProps) {
  const getClassName = () => {
    return `${styles.item} ${showOnMobile ? styles.mobile : ''}`
  }

  return (
    <li className={getClassName()} onClick={onClick}>
      <div className={styles.icon}>
        {icon && icon}
      </div>
      <span className={styles.label}>{label}</span>
    </li>
  )
}
