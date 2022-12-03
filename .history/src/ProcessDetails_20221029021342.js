import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProcesslines1 } from "./Actions";
import { useParams } from "react-router-dom";
const ProcessDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  const ProcessData1 = useSelector((state) => state.ProcessReducer1.TOM);
  console.log(ProcessData1);

  useEffect(() => {
    dispatch(getProcesslines1(access_token, id));
  }, []);

  return (
    <>
      {ProcessData1 &&
        ProcessData1.data.length > 0 &&
        ProcessData1.data.map((element) => {
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

                  <p class="card-text">
                    {element.year_of_installation} {element.modified_on}.
                  </p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default ProcessDetails;
