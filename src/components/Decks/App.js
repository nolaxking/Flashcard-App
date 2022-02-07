import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Cards from "./Cards/App";
import Create from "./Create/App";
import Deck from "./Deck/App";
import Editdeck from "./Editdeck/App";

import Study from "./Study/App";

function Decks() {
  const {url} = useRouteMatch();
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
