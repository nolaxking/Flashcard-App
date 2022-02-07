import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";

function Showcards({ deck }) {
  const [cards, setCards] = useState(0);
  const [flip, setFlip] = useState(true);
  const his = useHistory();
  const allCards = deck.cards;

  const handleNext = () => {
    setCards((card) => card + 1);
    setFlip(true);
    if (cards === allCards.length - 1) {
      return window.confirm("Do you want to reset cars ?")
        ? setCards(0)
        : his.push("/");
    }
  };

  const handleFlip = () => {
    setFlip(!flip);
  };
  if (allCards.length < 3) {
    return <NotEnoughCards allcards={allCards} />;
  }
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">
          Card {cards + 1} of {allCards.length}
        </h2>
        <div>
          <p>{flip ? allCards[cards].front : allCards[cards].back}</p>
          <button className="btn btn-primary mr-1" onClick={handleFlip}>
            Flip
          </button>

          {!flip ? (
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Showcards;
