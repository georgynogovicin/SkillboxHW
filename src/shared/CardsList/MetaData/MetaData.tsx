import React from 'react';
import {User} from '../Card/types';
import {CreatedAt} from '../CreatedAt';
import {UserLink} from '../UserLink';
import styles from './metadata.css';

interface IMetaDataProps {
  user: User,
  createdAt: string,
}

export function MetaData({user, createdAt}: IMetaDataProps) {
  return (
    <div className={styles.metaData}>
      <UserLink user={user} />
      <CreatedAt createdAt={createdAt}/>
    </div>
  );
}
