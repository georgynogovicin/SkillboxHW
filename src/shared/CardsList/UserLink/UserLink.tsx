import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  username: string,
  userLink: string,
  avatarUrl?: string
}

export function UserLink({username, userLink, avatarUrl}: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      {avatarUrl && <img className={styles.avatar} src={avatarUrl} alt={username}/>}
      <a href={userLink} className={styles.userName}>{username}</a>
    </div>
  );
}
