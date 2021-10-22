import React, {FormEvent, useEffect, useRef} from 'react';
import styles from './commentform.css';
import {getValue} from '../../../utils/react/from-syntetic-event';
import {preventDefault} from '../../../utils/react/prevent-default';

interface CommentFormProps {
  value?: string;
  handleChange(value: string): void;
  handleSubmit(e: FormEvent): void;
}

export function CommentForm({value, handleChange, handleSubmit}: CommentFormProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input}
                value={value}
                onChange={preventDefault(getValue(handleChange))}
                ref={ref} />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}

