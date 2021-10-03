import React from 'react';
import styles from './card.css';
import {MetaData} from '../MetaData';
import {CardTitle} from '../CardTitle';
import {CardPreview} from '../CardPreview';
import {CardMenu} from '../CardMenu';
import {CardControls} from '../CardControls';

const exampleCard = {
  user: {
    name: "John Doe",
    avatarUrl: "https://cdn.dribbble.com/users/1259559/avatars/normal/03d2ec443a4df3da75d0c025d43d0a82.png?1607523381",
    avatarAlt: "avatar-alt",
    userLink: "#user-link"
  },
  createdAt: "3.10.2021",
  postLink: "#post-link",
  postTitle: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos accusamus voluptatum distinctio, iusto molestias culpa illum sunt porro quo deserunt doloremque dolorum excepturi natus praesentium. Expedita doloremque adipisci exercitationem tenetur!",
  previewUrl: "https://cdn.dribbble.com/users/4540442/screenshots/16558334/media/c4a086e3cf000c7309d3b9aa226539a2.png",
  previewAlt: "preview alt"
}

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <MetaData user={exampleCard.user} createdAt={exampleCard.createdAt}/>
        <CardTitle postLink={exampleCard.postLink} postTitle={exampleCard.postTitle}/>
      </div>
      <CardPreview previewUrl={exampleCard.previewUrl} previewAlt={exampleCard.previewAlt}/>
      <CardMenu />
      <CardControls />
    </li>
  );
}
