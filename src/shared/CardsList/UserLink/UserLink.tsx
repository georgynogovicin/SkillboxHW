import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={"https://cdn.dribbble.com/users/1259559/avatars/normal/03d2ec443a4df3da75d0c025d43d0a82.png?1607523381"} />
      <a href="#users-url" className={styles.userName}>John Doe</a>
    </div>
  );
}
