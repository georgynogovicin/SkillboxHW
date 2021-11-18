import React, {useEffect, useState} from 'react';
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
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Post} from './shared/Post';
import {Redirect} from 'react-router-dom';
import {Text} from "./shared/Text";
import styles from "./styles.css";

const store = createStore(rootReducer as any, composeWithDevTools(applyMiddleware(thunk)));

export function AppComponent() {
  const [stateMounted, setStateMounted] = useState<boolean>(false);

  useEffect(() => {
    setStateMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {stateMounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Switch>
                <Redirect exact from="/" to="/posts" />
                <Redirect from="/auth" to="/posts" />
                <Route path="/posts">
                  <CardsList />
                  <Route path="/posts/:id">
                    <Post />
                  </Route>
                </Route>
                <Route path="*">
                  <div className={styles.notFound}>
                    <Text size={20}>Страница не найдена</Text>
                  </div>
                </Route>
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);

