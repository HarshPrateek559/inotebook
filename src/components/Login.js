import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../contexts/Alert/alertContext";

const Login = () => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const contexts = useContext(alertContext);
  const { showAlert } = contexts;
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    const response = await fetch("http://localhost:5000/api/auth/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
    });
    const json = await response.json(); //this contains the auth-token
    if (json.success) {
      navigate("/");
      localStorage.setItem("token", json.authToken);
      console.log("success", json.authToken)
      showAlert("Login Successful", "success");
    } else {
      showAlert("Login Failed", "danger");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
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
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
            value={credential.password}
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
  );
};

export default Login;
