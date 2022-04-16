//This component adds and edits the notes to the database
//

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../contexts/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "general",
    date: new Date(),
  });
  let mystyle = { //style for the button
    borderRadius: "10px 0px 10px 0px",
    width: "100%",
    height: "45px",
    fontSize: "20px",
  };
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); //this function adds the value of the input to the notes 
    //this function takes the element which is changing and make an object which is added to the notes object which is then exported to the context
  };
  const handleClick = (e) => {
    //e.preventDefault(); This is not letting the button to change the page
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" }); //This is resetting the form
  };
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="Title of The Note..."
          onChange={handleChange}
          value={note.title}
        />
      </div>
      <div>
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label">
            Write Your Note Here...
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="10"
            name="description"
            placeholder="Content of The Note..."
            onChange={handleChange}
            value={note.description}
          ></textarea>
        </div>
        <Link to="/" className="text-decoration-none text-white">
          <button
            className="btn btn-success"
            style={mystyle}
            onClick={handleClick}
          >
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddNote;
