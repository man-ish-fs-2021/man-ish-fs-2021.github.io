import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import { CommonFooterAndHome } from "../components";

const Router = () => {
  return (
    <Switch>
      <Redirect from="/man-ish-fs-2021.github.io" to="/" />
      <Route exact path="/">
        <Home />
      </Route>
      <CommonFooterAndHome>
        <Route exact path="/about">
          <About />
        </Route>
      </CommonFooterAndHome>
    </Switch>
  );
};

export default Router;
