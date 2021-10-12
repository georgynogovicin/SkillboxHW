import React from 'react';
import {EColor, EIconNames} from '../../../../constants/constants';
import {Icon} from '../../../Icon';
import {Text} from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a  href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
        className={styles.userBox}>
      <div className={styles.avatarBox}>
        {
          avatarSrc
            ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
            : <Icon name={EIconNames.Anon}/>
        }
      </div>
      <div className={styles.username}>
        <Text size={20} color={username ? EColor.black : EColor.grey99}>{username ?? "Аноним"}</Text>
      </div>
    </a>
  );
}
