import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { logInUsingGoogle } = useAuth();
  document.title = "Log in";
  const location = useLocation();
  const history = useHistory();

  const redirectUri = location?.state?.from || "/";

  const handleUsingGoogle = () => {
    logInUsingGoogle().then((result) => {
      history.push(redirectUri);
    });
  };
  return (
    <div className="container " style={{ marginBottom: "520px" }}>
      <div
        className="row align-items-center justify-content-center "
        style={{ height: "50vh" }}
      >
        <div className="col-md-3">
          <div>
            <button
              className="btn btn btn-dark fs-4"
              onClick={handleUsingGoogle}
            >
              <i className="fab fa-google"></i> Login with google
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <img
            src="https://i.ibb.co/bBWQDxH/undraw-Login-re-4vu2.png"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
