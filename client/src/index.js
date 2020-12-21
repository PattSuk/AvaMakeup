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
import AppointmentsItem from './pages/AppointmentItem';
import AppointmentsEdit from './pages/AppointmentEdit';

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
        <Route path="/appointments" exact component={Appointments} />
        <Route path="/appointments/:id" exact render = {(routerprops) => {return <AppointmentsItem routerprops={routerprops} />}} />
        <Route path="/appointments/:id/edit" render = {(routerprops) => {return <AppointmentsEdit routerprops={routerprops} />}} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
