import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../contexts/Alert/alertContext";

const Signup = () => {
  const context = useContext(alertContext);
  const { showAlert } = context;
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async () => {
    if (credential.cpassword === credential.password) {
      const response = await fetch(
        "http://localhost:5000/api/auth/createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credential.name,
            email: credential.email,
            password: credential.password,
          }),
        }
      );
      const json = await response.json(); //this contains the auth-token
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        showAlert("SignUp Successful", "success");
        navigate("/");
      } else {
        showAlert("SignUp Failed", "danger");
      }
    } else {
      context.showAlert(
        "Password and Confirm Password does not match",
        "danger"
      );
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Create A UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={onChange}
              value={credential.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={credential.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={onChange}
              value={credential.password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="cpassword"
              onChange={onChange}
              value={credential.cpassword}
            />
          </div>
          <Link to="/">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
