import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Headertabs = () => {
  return (
    <nav className="nav">
      <ul style={{ textDecoration: "none" }}>
        <li style={{ textDecoration: "none", listStyleType: "none" }}>
          <Link to="/pdetails">Process lines</Link>
        </li>
        <li>
          <Link to="/equipment">Equipment lines</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Headertabs;
