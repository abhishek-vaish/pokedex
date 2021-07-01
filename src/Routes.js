import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
