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
              <div
                class="card"
                style={{ display: "flex", width: "80%", textAlign: "center" }}
              >
                <img
                  style={{ width: 220, height: 140, marginLeft: 300 }}
                  class="card-img-top"
                  src={element.primary_product_details.primary_product_image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title"> NAME:{element.name}</h5>
                  <p class="card-text">
                    CAPACITY: {element.line_capacity} LOCATION :{" "}
                    {element.org_location_name}.
                  </p>

                  <h5>{element.capacity_uom_name}</h5>

                  <p class="card-text">
                    YEAR OF INSTALLATION:{element.year_of_installation}{" "}
                    MODIFICATION:{element.modified_on}.
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
