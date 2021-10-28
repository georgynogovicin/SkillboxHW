import React, {FormEvent, useRef} from 'react';
import styles from './commentform.css';
import {useFormik} from 'formik';

interface CommentFormProps {
  value?: string;
  handleChange(value: string): void;
  handleSubmit(e: FormEvent): void;
}

interface Values {
  comment: string
}

const validate = (values: Values) => {
  const errors = {} as Values

  if (values.comment.length < 3) {
    errors.comment = "Должно быть более 3-х символов" 
  }

  return errors;
}

export function CommentForm({value, handleChange}: CommentFormProps) {
  const form = useFormik({
    initialValues: {
      comment: value ?? "",
    },
    validate,
    onSubmit: (values: Values) => {
      handleChange(values.comment)
      console.log(`Комментарий "${values.comment}" успешно отправлен в store`)
    }
  });

  return (
    <form className={styles.form} onSubmit={form.handleSubmit}>
      <textarea className={styles.input}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="comment"
                value={form.values.comment}/>
      <div>{form.errors.comment}</div>
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}

