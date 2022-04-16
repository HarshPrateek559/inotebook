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
  let mystyle = {
    borderRadius: "10px 0px 10px 0px",
    width: "100%",
    height: "45px",
    fontSize: "20px",
  };
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    addNote(note);
    console.log("click");
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
