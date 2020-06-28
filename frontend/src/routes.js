import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Consulta from './pages/Consulta';
import NewConsulta from './pages/NewConsulta';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/consulta" exact component={Consulta} />
        <Route path="/consulta/new" exact component={NewConsulta} />
      </Switch>
    </BrowserRouter>
  )
}