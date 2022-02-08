import React from "react";
import {Route,Switch } from 'react-router-dom';
import Decks from "../components/Decks/App";
import Home from "../components/Home/App";
import Header from "./Header";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path= "/decks">
            <Decks/>
          </Route>
          
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
