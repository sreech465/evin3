import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProcesslines } from "./Actions";
import Headertabs from "./Headertabs";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Equipment from "./Equipment";
import { Link } from "react-router-dom";

const Process = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  const ProcessData = useSelector((state) => state.ProcessReducer.Data101);
  console.log(ProcessData);

  useEffect(() => {
    dispatch(getProcesslines(access_token));
  }, []);

  return (
    <>
      <Headertabs />
      {/* <div>
        <Routes>
          <Route path="/equipment" element={<Equipment />} />
        </Routes>
      </div> */}

      <>
        {ProcessData &&
          ProcessData.data.length > 0 &&
          ProcessData.data.map((element) => {
            return (
              <>
                <div class="card" style={{ display: "flex" }}>
                  <img
                    style={{ width: 70, height: 40 }}
                    class="card-img-top"
                    src={element.primary_product_details.primary_product_image}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{element.name}</h5>
                    <p class="card-text">
                      {element.line_capacity} {element.org_location_name}.
                    </p>
                    <button class="btn btn-primary">Details</button>
                  </div>
                </div>
              </>
            );
          })}
      </>
      {/* ) : ( "loading" ); */}
    </>
  );
};

export default Process;
