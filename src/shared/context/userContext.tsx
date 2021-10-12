import React from 'react';
import {useUserData} from '../Header/SearchBlock/UserBlock/hooks/useUserData';

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider ({children}: {children: React.ReactNode}) {
  const userData = useUserData();

  return (
    <userContext.Provider value={userData}>
      {children}
    </userContext.Provider>
  )
}