import React from "react";
import Historic from "./pages/historicUser/index";
import AddRepo from "./pages/addRepo/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Historic} />
        <Route path="/addrepo" component={AddRepo} />
      </Switch>
    </BrowserRouter>
  );
}
