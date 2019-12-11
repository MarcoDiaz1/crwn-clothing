import React from "react";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";

import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";


function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
