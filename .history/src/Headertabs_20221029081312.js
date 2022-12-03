import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Headertabs = () => {
  return (
    <>
      <h1>myInstallations</h1>
      <nav className="nav">
        <ul
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li style={{ listStyleType: "none" }}>
            <Link to="/pdetails">
              <button className="btn btn-primary">Process lines</button>
            </Link>
          </li>
          <li style={{ listStyleType: "none", marginLeft: 440 }}>
            <Link to="/equipment">
              <button className="btn btn-primary">Equipment lines</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Headertabs;
