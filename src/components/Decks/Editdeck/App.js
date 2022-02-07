import React, { useState, useEffect } from "react";
import Form from "../form";
import Navbar from "./Navbar";
import { readDeck } from "../../../utils/api";
import { useParams } from "react-router-dom";


function Editdeck() {
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
      <Navbar deck={deck} />
      <h2>Edit Deck</h2>
      <Form deck={deck} />
    </div>
  );
}

export default Editdeck;
