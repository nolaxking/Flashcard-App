import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Add from "./Add/App";
import { useRouteMatch, useParams } from "react-router-dom";

import Edit from "./Edit/App";
import { readDeck } from "../../../utils/api";


function Cards() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
  const { path } = useRouteMatch();

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
        <Route exact path={`${path}/new`}>
          <Add deck={deck} />
        </Route>
        <Route path={`${path}/:cardId/edit`}>
          <Edit deck={deck} />
        </Route>
      </Switch>
    </div>
  );
}

export default Cards;
