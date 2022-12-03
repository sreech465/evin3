import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Headertabs = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
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
                <button
                  // style={{ height: 45, width: 40 }}
                  className="btn btn-primary"
                >
                  Process lines
                </button>
              </Link>
            </li>
            <li style={{ listStyleType: "none", marginLeft: 440 }}>
              <Link to="/equipment">
                <button className="btn btn-primary">Equipment lines</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Headertabs;
