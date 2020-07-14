import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/dashboard">
      <h1>ROTA DASHBOARD</h1>
    </Route>

    <Route path="/dashboard/config">
      <h1>ROTA CONFIG</h1>
    </Route>
    <Redirect from="/dashboard" to="/dashboard" />
    <Route>
      <h1>ROTA TESTE</h1>
    </Route>
  </Switch>
);

export default PrivateRoutes;
