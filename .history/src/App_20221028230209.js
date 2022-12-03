import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Display from "./Display";
import Details from "./Details";
import ProcessDetails from "./ProcessDetails";
import Equipment from "./Equipment";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/display" element={<Display />} />
          <Route path="/details" element={<Details />} />
          <Route path="/processdetails" element={<ProcessDetails />} />
          <Route path="/edetails" element={<Equipment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
