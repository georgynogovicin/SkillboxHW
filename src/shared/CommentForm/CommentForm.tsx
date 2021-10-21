import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentform.css';
import {getValue} from '../../utils/react/from-syntetic-event';
import {preventDefault} from '../../utils/react/prevent-default';

interface CommentFromProps {
  initialValue?: string;
}

export function CommentForm({initialValue}: CommentFromProps) {
  const [value, setValue] = useState<string>("")

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (initialValue) {
      handleChange(`${initialValue}, `)
    }
  }, [initialValue]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

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

