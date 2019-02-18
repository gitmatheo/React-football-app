import React from "react";
import Layout from "./hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home.js";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
