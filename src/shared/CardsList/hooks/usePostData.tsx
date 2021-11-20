import axios from 'axios';
import React, {RefObject} from 'react';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {Card} from '../Card';

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

export function usePostData<T extends HTMLElement = HTMLElement>(ref: RefObject<T>) {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [after, setAfter] = useState<string>("");
  const [loadingCount, setLoadingCount] = useState<number>(0);

  const token = useSelector<RootState, string | undefined>(state => state.token);

  const load = () => {
    if (!token || loadingCount >= 3) return;
    setLoading(true);
      setError(null);

      axios.get<any>('https://oauth.reddit.com/rising/', {
        headers: {
          Authorization: `bearer ${token}`,
        },
        params: {
          limit: 10,
          after: after,
        }
      })
        .then(res => {
          setPosts(posts => [...posts, ...res.data.data.children]);
          setAfter(res.data.data.after);
          setLoading(false);
          setLoadingCount((count) => count + 1);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          setLoadingCount(0);
        })
  };

  const onLoadClick = () => {
    setLoadingCount(0);
    load();
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: "10px"
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.unobserve(ref.current!);
  }, [ref.current, token, after, loadingCount])

  const items = posts.map(({data}) => {
    const {id, ...rest} = data;
    return (
      <Card key={id} post={rest} />
    )
  });

  return {
    state: {
      items,
      error,
      loading,
      loadingCount,
    },
    onLoadClick
  }
}