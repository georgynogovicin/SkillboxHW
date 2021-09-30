import React from 'react';
import styles from './cardtitle.css';

export function CardTitle() {
  return (
    <h2 className={styles.title}>
      <a href="#post-link" className={styles.postLink}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos accusamus voluptatum distinctio, iusto molestias culpa illum sunt porro quo deserunt doloremque dolorum excepturi natus praesentium. Expedita doloremque adipisci exercitationem tenetur!</a>
    </h2>
  );
}
