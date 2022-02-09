import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link, useHistory,} from "react-router-dom";

import { deleteCard, readDeck } from "../../../utils/api/index";

function Showcards({ deck }) {
  const [cards, setCards] = useState(null);
  const his = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    async function getCards() {
      const res = await readDeck(deck.id);
      setCards(res.cards);
    }
    getCards();
  }, [deck.id]);

  if (!cards) return null;

  const listing = cards.map((card) => {
    function handleDelete(e) {
      if (window.confirm(" Delete this card ?")) {
        deleteCard(card.id);
        setCards((lastCard) => {
          const newCard = lastCard.filter((item) => item.id !== card.id);
          return newCard;
        });
      } else {
        his.push(`${url}`);
      }
    }
    
    return (
      <div key={card.id}>
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              Side A : <span>{card.front}</span>
            </p>
            <p className="card-text">
              Side B : <span>{card.back}</span>{" "}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link
                to={`${url}/cards/${card.id}/edit`}
                className="btn btn-secondary mr-1"
              >
                Edit
              </Link>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{listing}</div>;
}

export default Showcards;
