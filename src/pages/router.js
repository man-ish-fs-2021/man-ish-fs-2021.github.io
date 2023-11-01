import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const Router = () => {
  return (
    <Switch>
      <Redirect from="/man-ish-fs-2021.github.io" to="/" />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );
};

export default Router;
