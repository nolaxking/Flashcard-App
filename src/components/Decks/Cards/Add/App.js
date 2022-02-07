import React from 'react';
import Form from '../Form';
import Navbar from './Navbar';

function Add({deck}) {
  return (<div>
      <Navbar deck={deck}/>
      <h1>{`${deck.name}: Add Card`}</h1>
      <Form deck={deck}/>

  </div>);
}

export default Add;
