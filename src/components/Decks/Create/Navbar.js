import React from 'react';
import {Link } from 'react-router-dom';


//DONE AND WORKS
function Navbar() {
  return <div className = "container">
   <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active" ><Link to="/">Home</Link></li>
    <li className="breadcrumb-item active">Create Deck</li>
  </ol>
</nav>   

  </div>;
}

export default Navbar;
