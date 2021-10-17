import React, {useState} from 'react';
import {EColor, EIconNames} from '../../../constants/constants';
import {UserLink} from '../../CardsList/UserLink';
import {CommentForm} from '../../CommentForm';
import {CommentFormUncontrolled} from '../../CommentForm/CommentFormUncontrolled';
import {Icon} from '../../Icon';
import {Text} from '../../Text';
import styles from './commentitem.css';

const userName = "John Doe";

export function CommentItem() {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.commentItem}>
      <div className={styles.commentHeader}>
        <UserLink username={userName} userLink="#some-user-link" avatarUrl="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_0.png" />
        <span className={styles.time}>1 час назад</span>
        <span className={styles.league}>Лига юристов</span>
      </div>
      <Text size={14} As="span">
        Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
      </Text>
      <div className={styles.commentControls}>
        <button onClick={() => setFormIsOpen(!formIsOpen)}>
          <Icon name={EIconNames.Comment} />
          <Text size={14} color={EColor.grey66}>
            Ответить
          </Text>
        </button>
        <button>
          <Icon name={EIconNames.Share} />
          <Text size={14} color={EColor.grey66}>
            Поделиться
          </Text>
        </button>
        <button>
          <Icon name={EIconNames.Complain} />
          <Text size={14} color={EColor.grey66}>
            Пожаловаться
          </Text>
        </button>
      </div>
      {
        formIsOpen && (
          <CommentForm initialValue={userName}/>
        )
      }
    </div>
  );
}
