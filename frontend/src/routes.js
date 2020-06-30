import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Consulta from './pages/Consulta';
import ConsultaPet from './pages/ConsultaPet';
import NewConsulta from './pages/NewConsulta';
import NewPet from './pages/NewPet';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/consulta" exact component={Consulta} />
        <Route path="/consulta/pet" exact component={ConsultaPet}/>
        <Route path="/consulta/new" exact component={NewConsulta} />
        <Route path="/pet/new" exact component={NewPet}/>
      </Switch>
    </BrowserRouter>
  )
}