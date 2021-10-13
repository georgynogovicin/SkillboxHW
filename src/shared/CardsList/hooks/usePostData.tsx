import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../../context/tokenContext';

export type Post = {
  id?: string;
  author: string;
  created_utc: number;
  num_comments: number;
  permalink: string;
  title: string;
  url: string;
  thumbnail: string;
}

export type PostItem = {
  kind: string;
  data: Post;
}

export function usePostData() {
  const token = useContext(tokenContext);
  const [postData, setPostData] = useState<PostItem[]>([]);

  useEffect(() => {
    if (token) {
      axios.get<any>('https://oauth.reddit.com/best/', {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: {
          limit: 10
        }
      })
        .then(res => setPostData(res.data.data.children))
        .catch(console.log)
    }
  }, [token]);

  return postData;
}