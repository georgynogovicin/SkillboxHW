import React, {FormEvent, useEffect, useRef} from 'react';
import styles from './commentform.css';

interface CommentUCFromProps {
  initialValue?: string;
}

export function CommentFormUncontrolled({initialValue}: CommentUCFromProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input}
                defaultValue={initialValue ?? undefined}
                ref={ref} />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}

