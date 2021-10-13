import React from 'react';
import {User} from '../Card/types';
import {CreatedAt} from '../CreatedAt';
import {UserLink} from '../UserLink';
import styles from './metadata.css';

interface IMetaDataProps {
  username: string,
  userLink: string,
  createdAt: number,
}

export function MetaData({username, userLink, createdAt}: IMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <UserLink username={username} userLink={userLink} />
      <CreatedAt createdAt={createdAt}/>
    </div>
  );
}
