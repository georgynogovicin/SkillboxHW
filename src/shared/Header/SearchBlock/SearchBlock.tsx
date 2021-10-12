import React, {useContext} from 'react';
import {userContext} from '../../context/userContext';
import styles from './searchblock.css';
import {UserBlock} from './UserBlock';


export function SearchBlock() {
  const {name, iconImg} = useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <UserBlock username={name} avatarSrc={iconImg}/>
    </div>
  );
}
