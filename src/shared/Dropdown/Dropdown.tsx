import React, {useEffect, useState} from 'react';
import {NOOP} from '../../utils/js/noop';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
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
  
  return (
    <div className={styles.container}>
      <div onClick={() => handleOpen()}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div onClick={() => setIsDropdownOpen(false)} className={styles.list}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
