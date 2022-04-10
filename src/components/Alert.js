import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="content" style={{ height: "50px" }}>
      { (
        <div>
          <div
            className={`alert alert-${props.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(props.type)}</strong>: {props.msg}
          </div>
        </div>
      )}
    </div>
  );
}