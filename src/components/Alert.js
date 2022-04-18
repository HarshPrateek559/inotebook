import React, { useContext} from "react";
import alertContext from "../contexts/Alert/alertContext";

export default function Alert() {
  const context = useContext(alertContext);
  const {alert} = context;
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="content" style={{ height: "25px", position: "sticky", top: "0", width: "100%" }}>
      { (
        <div>
          <div
            className={`alert alert-${alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(alert.type)}</strong> {alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}