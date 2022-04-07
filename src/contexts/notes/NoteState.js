import NoteContext from "./noteContext";

const noteState = (props) => {
  const state = {
    name: "Harsh",
    role: "Software Engineer",
    company: "Google"
  };

  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default noteState;
