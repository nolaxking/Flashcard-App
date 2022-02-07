import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import { readDeck } from "../../../utils/api";
import Navbar from './Navbar';
import Showcards from './Showcards';

function Study() {
const {deckId}= useParams();
const [deck,setDeck] = useState(null)

useEffect(() => {
    async function getDeck() {
      const res = await readDeck(deckId);
      setDeck(res);
      console.log(res)
    }
    getDeck()
  },[deckId]);

if(!deck) return null
  return <div>
      <Navbar deck = {deck} />
      <h2>{`${deck.name}: Study`}</h2>
      <Showcards deck={deck} />
      
      
  </div>;
}

export default Study;
