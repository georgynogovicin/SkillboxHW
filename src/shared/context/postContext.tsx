import React from 'react';
import {PostItem, usePostData} from '../CardsList/hooks/usePostData';

export const postContext = React.createContext<PostItem[]>([]);

export function PostContext({children} : {children: React.ReactNode}) {
  const postData = usePostData();
  
  return (
    <postContext.Provider value={postData}>
      {children}
    </postContext.Provider>
  )
}