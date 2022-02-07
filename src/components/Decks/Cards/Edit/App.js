import React from 'react';
import Form from '../Form';
import Navbar from './Navbar';

function Edit({deck}) {
  return (
  <div>
<Navbar deck={deck}/>
<h2>Edit Card</h2>
<Form deck={deck}/>
  </div>
  );
}

export default Edit;
