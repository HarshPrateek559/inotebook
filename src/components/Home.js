import Notes from "./Notes";
import { Link } from "react-router-dom";

export default function Home() {
  let mystyle = {
    borderRadius: "10px 0px 10px 0px",
  }
  return (
    <div className="container text-center">
      <Notes />
      <button className="btn btn-success" style={mystyle}>
        <Link to="/AddNote" className="text-decoration-none text-white">Add Note</Link>
      </button>
    </div>
  );
}
