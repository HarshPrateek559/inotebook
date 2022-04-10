import React from "react";
import PropTypes from "prop-types";

const NoteItem = (props) => {
  const { note } = props;
  let mystyle = {
    border: "1px solid black",
    borderRadius: "20px 0px 20px 0px",
    margin: "5px",
  }
  return (
    <div className="col-md-3" style = {mystyle}>
      <div className="card-body">
        <h3 className="card-title text-center">{note.title}</h3>
        <p className="card-text my-3">{note.description}</p>
        <p><i className="fa-solid fa-trash-alt mx-2" /><i className="fa-solid fa-pen-to-square mx-2" /></p>
        
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItem;
