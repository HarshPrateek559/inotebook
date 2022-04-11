import React, { useContext } from "react";

import noteContext from "../contexts/notes/noteContext";

const About = () => {
  try {
    const context = useContext(noteContext);
    const {state} = context;
    return (
      <div>
        Hi! I am {state.name} and I am a {state.role} at {state.company}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
export default About;
