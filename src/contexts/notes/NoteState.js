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
    console.log("getnotes is called")
    console.log(json, "getnotes is called");
    setNotes(json);
  };

  //Add a note to the state
  const addNote = async (note) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZjA4YjBkNmQzOGQzNTJlYzI0ZGM4In0sImlhdCI6MTY0ODI5ODE2MH0.bv2SrGgBv_cUZLUO-wSKzCXKyUfCukep7O2TXOvGitU",
      },
      body: JSON.stringify({ note }),
    });
    const json = await response.json();
    setNotes([...notes, note]);
  };

  //Remove a note from the state
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
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

    const json = response.json();

    //filter the notes and replace the note with the new note
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
      }
    }
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
