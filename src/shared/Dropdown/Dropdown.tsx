import React, {useEffect, useState} from 'react';
import {NOOP} from '../../utils/js/noop';
import {ListItem} from '../CardsList/CardMenu/MenuListItem/types';
import {Portal} from '../Portal';
import styles from './dropdown.css';
import {DropDownList} from './DropDownList';

interface IDropdownProps {
  button: React.ReactNode;
  items: ListItem[];
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({button, items, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(() => {
    setIsDropdownOpen(!setIsDropdownOpen)
  }, [isOpen]);

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose()
  }, [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const handleClose = () => {
    setIsDropdownOpen(false);
  }

  return (
    <div className={styles.container}>
      <div onClick={() => handleOpen()}>
        {button}
      </div>
      {isDropdownOpen && (
        <Portal>
          <DropDownList items={items} onClose={handleClose}/>
        </Portal>
      )}
    </div>
  );
}
