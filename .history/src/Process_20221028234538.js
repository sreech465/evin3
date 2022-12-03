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
              <p>{element.name}</p>
              <img
                style={{ width: 30, height: 10 }}
                src={element.primary_product_details.primary_product_image}
              />
              }
              <p>
                {element.po_number} {element.project_id}
              </p>
            </>
          );
        })}
    </>
  ) : (
    "loading"
  );
};

export default Process;
