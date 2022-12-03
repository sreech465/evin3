import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Headertabs = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
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
