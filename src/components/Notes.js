import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../contexts/notes/noteContext";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div className=" text-center">
        <h2>HERE ARE YOUR NOTES</h2>
      <div className="row d-flex justify-content-center">

        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
