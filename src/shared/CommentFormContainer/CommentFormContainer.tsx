import React, {FormEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, updateComment} from '../../redux/store';
import {CommentForm} from './CommentForm';

interface CommentFormContainerProps {
  initialValue?: string;
}

export function CommentFormContainer({initialValue}: CommentFormContainerProps) {
  const commentText = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialValue) {
      handleChange(`${initialValue}, `)
    }
  }, [initialValue]);

  const handleChange = (value: string) => {
    dispatch(updateComment(value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <CommentForm 
      value={commentText} 
      handleChange={handleChange}
      handleSubmit={handleSubmit} />
  );
}
