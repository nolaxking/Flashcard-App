import React from 'react';
import {Link } from 'react-router-dom';


//DONE AND WORKS
function Navbar({deck}) {
  return <div className = " container">
   <nav aria-label="breadcrumb">
  <ol className ="breadcrumb">
    <li className="breadcrumb-item active" ><Link to="/">Home</Link></li>
    <li className="breadcrumb-item active"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
    <li className ="breadcrumb-item active">Study</li>
  </ol>
</nav>   

  </div>;
}

export default Navbar;
