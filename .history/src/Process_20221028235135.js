import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProcesslines } from "./Actions";

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

  return ProcessData ? (
    <>
      {ProcessData &&
        ProcessData.data.length > 0 &&
        ProcessData.data.map((element) => {
          return (
            <>
              <div class="card">
                <img
                  class="card-img-top"
                  src={element.primary_product_details.primary_product_image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{element.name}</h5>
                  <p class="card-text">
                    {element.line_capacity} {element.org_location_name}.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </>
          );
        })}
    </>
  ) : (
    "loading"
  );
};

export default Process;
