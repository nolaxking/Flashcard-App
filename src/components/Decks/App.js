import React from "react";

import { Route, Switch } from "react-router-dom";

import Create from "./Create/App";
import Deck from "./Deck/App";



function Decks() {
 
  return (
    <div className="container">
      <Switch>
    
        <Route path="/decks/new">
          <Create />
        </Route>
        <Route path="/decks/:deckId">
          <Deck />
        </Route>
       
      </Switch>
    </div>
  );
}

export default Decks;
