import AlertContext from "./alertContext";
import React, { useState } from "react";

const AlertState = (props) => {
  const [alert, setAlert] = useState({msg: "", type: ""});
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert({msg :"", type: ""});
    }, 1500);
  };
  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
