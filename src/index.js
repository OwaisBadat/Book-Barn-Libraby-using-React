import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Library} from './components/Library'
import {AddBook} from './components/AddToMyLibrary'


ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/library" component={Library} />
      <Route exact path="/my-library" component={Home} />
      <Route exact path="/add-to-my-library" component={AddBook} />
    </Switch>
  </BaseLayout>
  </BrowserRouter>
  ,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
