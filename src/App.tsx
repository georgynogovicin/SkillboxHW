import React from 'react';
import {createStore} from 'redux';
import {hot} from "react-hot-loader/root"
import {Layout} from './shared/Layout';
import "./main.global.css";
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {UserContextProvider} from './shared/context/userContext';
import {PostContext} from './shared/context/postContext';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './redux/store';

const store = createStore(rootReducer as any, composeWithDevTools());

export function AppComponent() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);

