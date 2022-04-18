import React, { useContext } from "react";
import noteContext from "../contexts/notes/noteContext";
import alertContext from "../contexts/Alert/alertContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote, } = context;
  const contexts = useContext(alertContext);
  const { showAlert } = contexts;
  const { note, updateNote } = props;

  let mystyle = {
    border: "1px solid black",
    borderRadius: "20px 0px 20px 0px",
    margin: "5px",
  };
  return (
    <div className="col-md-3" style={mystyle}>
      <div className="card-body">
        <h3 className="card-title text-center">{note.title}</h3>
        <p className="card-text my-3">{note.description}</p>
        <p className="d-inline-flex justify-content-around h-100 w-100">
          <i
            className="fa-solid fa-trash-alt mx-2"
            onClick={() => {
              deleteNote(note._id);
              showAlert("Note Deleted", "danger");
            }}
          />
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
                
              }}
            />
        </p>
      </div>
    </div>
  );
};

export default NoteItem;
