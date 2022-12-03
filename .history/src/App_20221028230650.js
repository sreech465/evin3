import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Display from "./Display";
import Details from "./Details";
import Process from "./Process";
import Equipment from "./Equipment";
import Learning from "./Learning";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/display" element={<Display />} />
          <Route path="/details" element={<Details />} />
          <Route path="/pdetails" element={<Process />} />
          <Route path="/elearning" element={<Learning />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
