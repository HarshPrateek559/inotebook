import React, { useContext } from "react";

import noteContext from "../contexts/notes/noteContext";

const About = () => {
  try {
    const first = useContext(noteContext);

    return (
      <div>
        Hi! I am {first.name} and I am a {first.role} at {first.company}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
export default About;
