import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Switch, useParams, Route } from "react-router-dom";
import { readDeck } from "./../../../utils/api/index";
import Editdeck from "../Editdeck/App";
import Navbar from "./Navbar";
import Showcards from "./Showcards";
import View from "./View";
import Study from "../Study/App";
import Cards from "../Cards/App";

function Deck() {
  const {deckId} = useParams();
  const [deck, setDeck] = useState(null);
  const {path } = useRouteMatch();
  useEffect(() => {
    async function getDeck() {
      const res = await readDeck(deckId);
      setDeck(res);
    }
    getDeck();
  }, [deckId]);

  if (!deck) return null;

  return (
    <div>
      <Switch>
        <Route exact path={`${path }`}>
          <Navbar deck={deck} />
          <View deck={deck} />
          
        
        </Route>
        <Route path={`${path }/study`}>
          <Study />
        </Route>
        <Route path={`${path }/edit`}>
          <Editdeck />
        </Route>
        <Route path={`${path }/cards`}>
          <Cards />
        </Route>
      
      </Switch>
    </div>
  )
}

export default Deck;
