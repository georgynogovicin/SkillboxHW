import React from 'react';
import {hot} from "react-hot-loader/root"
import {Layout} from './shared/Layout';
import "./main.global.css";
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {useToken} from './hooks/useToken';
import {tokenContext} from './shared/context/tokenContext';
import {UserContextProvider} from './shared/context/userContext';
import {PostContext} from './shared/context/postContext';

export function AppComponent() {
  const token = useToken();

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <PostContext>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostContext>
      </UserContextProvider>
    </tokenContext.Provider>
  )
}

export const App = hot(() => <AppComponent />);