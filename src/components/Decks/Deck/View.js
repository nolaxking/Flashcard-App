import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { deleteDeck, readDeck } from "../../../utils/api";
import Showcards from "./Showcards";

function View() {
  const his = useHistory();
  const { url } = useRouteMatch();

  const { deckId } = useParams();
  const [deck, setDeck] = useState(null);
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
      <div className="col-sm-12 p-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <p className="card-text">{deck.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <Link to={`${url}/edit`} className="btn btn-secondary mr-1">
                  Edit
                </Link>
                <Link to={`${url}/study`} className="btn btn-primary mr-1">
                  Study
                </Link>
                <Link to={`${url}/cards/new`} className="btn btn-primary">
                  Add Cards
                </Link>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this deck?"
                      )
                    ) {
                      deleteDeck(deck.id);
                      his.push("/");
                    } else {
                      his.push(`${url}`);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Cards</h1>
      </div>
      <Showcards deck={deck} />
    </div>
  );
}

export default View;
