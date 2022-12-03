import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "./Actions";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleclick = (e) => {
    e.preventDefault();
    dispatch(loginAction(username, password, navigate));
  };

  return (
    <>
      <div style={{ position: "absolute", left: 400, right: 250, top: 80 }}>
        <div className="container text-center">
          <form className="p-3">
            <h3 className="text-info">SIGN IN</h3>
            <input
              className="m-2"
              type="text"
              placeholder="enter Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <br />
            <br />
            <input
              className="m-2"
              type="text"
              placeholder="enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: 10,
                borderColor: "green",
              }}
              onClick={handleclick}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
