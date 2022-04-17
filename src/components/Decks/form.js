import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createDeck, updateDeck, listDecks } from "../../utils/api/index";
import ErrorAlert from "../../Layout/ErrorAlert";
function Form({ deck }) {
  const his = useHistory();
  const { pathname } = useLocation();
  const [error, setError] = useState();

  const [edit, setEdit] = useState(true);
  const [name, setName] = useState({ name: "" });
  const [description, setDescription] = useState({ description: "" });

  useEffect(() => {
    function addOrEdit() {
      const abort = new AbortController();
      if (pathname.includes("edit")) {
        setName({ name: deck.name });
        setDescription({ description: deck.description }, abort.signal);
      } else {
        setEdit(false);
      }
    }
    addOrEdit();
  }, [deck, pathname]);

  function handleName(event) {
    const abort = new AbortController();
    try {
      setName({ ...name, name: event.target.value }, abort.signal);
    } catch (err) {
      throw err;
    }
  }

  function handleDescription(event) {
    const abort = new AbortController();
    try{
    setDescription(
      { ...description, description: event.target.value },
      abort.signal
    );
    }
    catch(err){
      throw err
    }
  }

  async function handleCreate() {
    const abort = new AbortController();

    try {
      if(name.name === ""){
        throw new Error("Need a name!!")
      }if(description.description===""){
        throw new Error("Need a description!!")
      }
      await createDeck({ ...name, ...description }, abort.signal);
      const response = await listDecks();
      const newDeckId = Math.max(...response.map((deck) => deck.id));
      his.push(`/decks/${newDeckId}`);
    } catch (err) {
      if(err)setError(err.message)
    }
  }

  function handleUpdate() {
    const abort = new AbortController();
    try {
     
        if(name.name === ""){
          throw new Error("Need a name")
        }if(description.description===""){
          throw new Error("Need a description")
        }
      updateDeck({ id: deck.id, ...name, ...description }, abort.signal);
    his.push(`/decks/${deck.id}`);
      
    } catch (err) {
      if(err)setError(err.message)
    }
    
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name.name || ""}
            placeholder={edit ? null : "Deck Name"}
            onChange={handleName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description.description || ""}
            placeholder={edit ? null : "Brief Description of Deck"}
            onChange={handleDescription}
          >
            {" "}
          </textarea>
        </div>
        <div>
          <ErrorAlert error={error} />
        </div>

        <button
          type="button"
          className="btn btn-secondary mr-1"
          onClick={() => his.push(edit ? `/decks/${deck.id}` : "/")}
          required
        >
          Cancel
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={edit ? handleUpdate : handleCreate}
          required
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Form;
