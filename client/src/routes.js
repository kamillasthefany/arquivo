import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
//import Home from './pages/Home';
import Home from './pages/Teste';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
};