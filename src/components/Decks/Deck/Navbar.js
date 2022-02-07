import React from 'react';
import {Link } from 'react-router-dom';




function Navbar({deck}) {


  return( 
  <div>
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
    </ol>
  </nav>

  </div>
  )
}

export default Navbar;
