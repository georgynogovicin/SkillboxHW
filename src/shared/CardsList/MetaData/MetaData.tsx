import React from 'react';
import {CreatedAt} from '../CreatedAt';
import {UserLink} from '../UserLink';
import styles from './metadata.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <UserLink />
      <CreatedAt />
    </div>
  );
}
