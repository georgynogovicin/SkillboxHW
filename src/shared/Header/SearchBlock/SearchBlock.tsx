import React from 'react';
import styles from './searchblock.css';
import {UserBlock} from './UserBlock';
import {useUserData} from './UserBlock/hooks/useUserData';


export function SearchBlock() {
  const userData = useUserData();
  const {user, loading} = userData;

  return (
    <div className={styles.searchBlock}>
      <UserBlock username={loading ? "...Загрузка" : user.name} avatarSrc={user.iconImg}/>
    </div>
  );
};