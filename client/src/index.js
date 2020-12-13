import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import App from './App';
import Booking from './pages/Booking';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={App} />
        <Route path="/booking" component={Booking} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
