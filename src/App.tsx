import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {hot} from "react-hot-loader/root"
import {Layout} from './shared/Layout';
import "./main.global.css";
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './redux/store';
import thunk from 'redux-thunk';

const store = createStore(rootReducer as any, composeWithDevTools(applyMiddleware(thunk)));

export function AppComponent() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);

