import NoteContext from "./noteContext";

//it works just like we add props to the component just that now any component can use it just by importing it
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
