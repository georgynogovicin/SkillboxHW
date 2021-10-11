import React from 'react';
import {NOOP} from '../../../../utils/js/noop';
import styles from './menulistitem.css';
import {Text} from '../../../Text';
import {Icon} from '../../../Icon';
import {EIconNames} from '../../../../constants/constants';

interface IMenuListItemProps {
  label: string;
  icon: EIconNames;
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
        <Icon name={icon} size={16} mobileSize={12}/>
      </div>
      <Text size={14} mobileSize={12}>{label}</Text>
    </li>
  )
}
