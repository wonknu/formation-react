import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/header';
import {
  Article,
  Error404,
  Home
} from './pages';
import LocalizeProvider from './components/localize';

function App() {
  return (
    <BrowserRouter>
      <LocalizeProvider>
        <div className="App">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/:lang([a-z]{2}-[a-z]{2})" component={Home} />
              <Route path="/:lang([a-z]{2}-[a-z]{2})/article/:id" component={Article} />
              <Route path="*" component={Error404} />
            </Switch>
          </div>
        </div>
      </LocalizeProvider>
    </BrowserRouter>
  );
}

export default App;
