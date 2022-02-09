import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../../utils/api/index";

function ShowDecks() {
  const [decks, setDecks ] = useState([]);
  const his = useHistory();

  useEffect(() => {
    async function getDeck() {
      const res = await listDecks();
      setDecks(res);
      
    }
    getDeck()
  },[]);

  const listing = decks.map((deck) => {
    function handleDelete(e) {
      if (window.confirm(" Delete this deck?")) {
        deleteDeck(deck.id);
        setDecks(lastCard => {
          const newCard = lastCard.filter(item=> item.id !== deck.id);
          return newCard;
        });
        his.push("/");
      } 
        
      
    }
    return (
      <div className="card" key= {deck.id}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4 className="card-title"> {deck.name}</h4>
            <p>{`${deck.cards.length} cards`}</p>
          </div>
          <p className="card-text"> {deck.description} </p>
          <div className="d-flex justify-content-between">
            <div>
              <Link to={`/decks/${deck.id}`} className="btn btn-primary mr-1">
                View
              </Link>
              <Link to={`/decks/${deck.id}/study`} className="btn btn-success">
                Study
              </Link>
            </div>
            <div>
              <button className="btn btn-danger " onClick={handleDelete}>
                Delete Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  });


  return (
  <div>
      {listing}
      
      </div>
    )
}

export default ShowDecks;
