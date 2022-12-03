import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Headertabs = () => {
  return (
    <nav className="nav">
      <ul
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li style={{ listStyleType: "none", justifyContent: "space-between" }}>
          <Link to="/pdetails">Process lines</Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link to="/equipment">Equipment lines</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Headertabs;
