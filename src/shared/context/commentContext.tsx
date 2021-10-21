import React, {createContext} from 'react';
import {NOOP} from '../../utils/js/noop';

type TCommentContext = {
  value: string;
  onChange(value: string): void;
}

export const commentContext = createContext<TCommentContext>({
  value: "",
  onChange: NOOP,
})

interface CommmentContextProps {
  children: React.ReactNode,
  value: string,
  onChange: (value: string) => void
}

export function CommentContext ({children, value, onChange} : CommmentContextProps) {
  return (
    <commentContext.Provider value={{value, onChange}}>
      {children}
    </commentContext.Provider>
  )
}