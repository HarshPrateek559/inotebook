import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Title of The Note..."
        />
      </div>
      <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Write Your Note Here...
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Content of The Note..."
        ></textarea>
      </div>
    </div>
  );
}
