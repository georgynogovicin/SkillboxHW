import React from 'react';
import {CardActions} from './CardActions';
import styles from './cardcontrols.css';
import {CommentsButton} from './CommentsButton';
import {KarmaCounter} from './KarmaCounter';

export function CardControls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />
      <CardActions />
    </div>
  );
}
