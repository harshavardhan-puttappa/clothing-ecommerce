import React, { Fragment } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
