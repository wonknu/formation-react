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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
