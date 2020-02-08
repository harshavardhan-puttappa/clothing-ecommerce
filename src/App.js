import React, { Fragment } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Hats = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={Hats} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
