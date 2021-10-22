import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

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
  const token = useSelector<RootState, string>(state => state.token)
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