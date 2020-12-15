import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import App from './App';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Appointments from './pages/Appointments';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={App} />
        <Route path="/booking" component={Booking} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/appointments" component={Appointments} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
