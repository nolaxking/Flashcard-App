import React from "react";
import { Link, useParams } from "react-router-dom";

function NotEnoughCards({ allCards=[] }) {
  const { deckId } = useParams();
  return (
    <div>
      <h2>Not enough cards!</h2>
      <p>
        You need at least 3 cards to study. There are {allCards.length} in this
        deck.
      </p>
      <Link
        to={`/decks/${deckId}/cards/new`}
        type="button"
        className="btn btn-primary"
      >
        Add Cards
      </Link>
    </div>
  );
}

export default NotEnoughCards;
