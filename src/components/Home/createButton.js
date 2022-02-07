import React from "react";
import { Link } from "react-router-dom";

function CreateButton() {
  return (
    <div className="col-sm-5 mb-2">
      <Link to="/decks/new" className="btn btn-primary">
        Create Deck
      </Link>
    </div>
  );
}

export default CreateButton;
