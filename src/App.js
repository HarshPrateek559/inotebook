import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./contexts/notes/NoteState";
import AddNote from "./components/AddNote";
// import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* <Alert msg="This is an alert message" type="success" /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/AddNote" element={<AddNote />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
