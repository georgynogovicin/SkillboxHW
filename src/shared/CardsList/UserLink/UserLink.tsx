import React from 'react';
import {User} from '../Card/types';
import styles from './userlink.css';

interface IUserLinkProps {
  user: User,
}

export function UserLink({user}: IUserLinkProps) {
  const {avatarUrl, userLink, name, avatarAlt} = user;
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={avatarUrl} alt={avatarAlt}/>
      <a href={userLink} className={styles.userName}>{name}</a>
    </div>
  );
}
