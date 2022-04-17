import NoteContext from "./noteContext";
import React, { useState } from "react";

//it works just like we add props to the component just that now any component can use it just by importing it
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const state = {
    name: "Harsh",
    role: "Software Engineer",
    company: "Google",
  };
  

  //get the notes from the server
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjA4YjBkNmQzOGQzNTJlYzI0ZGM4In0sImlhdCI6MTY0OTE1NDE2N30.xxMXAN9vBPpLLvbfask_UJQco7YTnr8uZvPPYMj16D0"
    }});
    const json = await response.json();
    setNotes(json);
  };

  //Add a note to the state
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjA4YjBkNmQzOGQzNTJlYzI0ZGM4In0sImlhdCI6MTY0ODI5ODE2MH0.bv2SrGgBv_cUZLUO-wSKzCXKyUfCukep7O2TXOvGitU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes([...notes, note]);
  };
  

  //Remove a note from the state
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjA4YjBkNmQzOGQzNTJlYzI0ZGM4In0sImlhdCI6MTY0ODI5ODE2MH0.bv2SrGgBv_cUZLUO-wSKzCXKyUfCukep7O2TXOvGitU",
      },
    });

    const json = response.json();
    setNotes(notes.filter((note) => note._id !== id));
  };

  //edit a note from the state
  const editNote = async (id, title, description, tag) => {
    //make a fetch api call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjA4YjBkNmQzOGQzNTJlYzI0ZGM4In0sImlhdCI6MTY0ODI5ODE2MH0.bv2SrGgBv_cUZLUO-wSKzCXKyUfCukep7O2TXOvGitU",
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });

    const json =await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    //filter the notes and replace the note with the new note
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ state, notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
