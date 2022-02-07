import React from "react";
import CreateButton from "./createButton";
import ShowDecks from "./ShowDecks";

function Home() {
  return (
    <div className="container">
      <CreateButton />
      <ShowDecks />
    </div>
  );
}

export default Home;
