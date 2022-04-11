import NoteContext from "./noteContext";
import React, { useState } from "react";

//it works just like we add props to the component just that now any component can use it just by importing it
const NoteState = (props) => {
  const state = {
    name: "Harsh",
    role: "Software Engineer",
    company: "Google"
  };

  const noteInitials = [
    {
      "_id": "624c17cb59f7e4fe282bf801",
      "user": "623f08b0d6d38d352ec24dc8",
      "title": "Title of the first note",
      "description": "Description of the notes",
      "tag": "general",
      "date": "2022-04-05T10:19:55.627Z",
      "__v": 0
    },
    {
      "_id": "624c17de59f7e4fe282bf803",
      "user": "623f08b0d6d38d352ec24dc8",
      "title": "Title of the second note",
      "description": "Description of the second notes",
      "tag": "general",
      "date": "2022-04-05T10:20:14.789Z",
      "__v": 0
    },
    {
      "_id": "624c17f459f7e4fe282bf805",
      "user": "623f08b0d6d38d352ec24dc8",
      "title": "Title of the third note",
      "description": "Description of the third notes",
      "tag": "general",
      "date": "2022-04-05T10:20:36.095Z",
      "__v": 0
    }
  ]
  
  const [notes, setNotes] = useState(noteInitials);
  //Add a note to the state
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  //Remove a note from the state
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note._id !== id));
  };
//edit a note from the state
  const editNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note._id === id ? updatedNote : note)));
  };




  
  return (
    <NoteContext.Provider value={{state, notes, setNotes, addNote, deleteNote, editNote}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
