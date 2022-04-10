import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../contexts/notes/noteContext";

export default function Home() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Title of The Note..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Write Your Note Here...
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Content of The Note..."
        ></textarea>
      </div>
      <div className="row my-3">
      <h2>HERE ARE YOUR NOTES</h2>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
      </div>
    </div>
  );
}
