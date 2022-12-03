import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectDetails } from "./Actions";

const Details = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  const ProjectList = useSelector((state) => state.ProjectReducer.Data100);
  console.log(ProjectList.data.results[0]);

  useEffect(() => {
    dispatch(getProjectDetails(access_token));
    // dispatch(getProcesslines(access_token));
    // dispatch(getEquipmentDetails(access_token));
  }, []);

  return ProjectList ? (
    <>
      {ProjectList &&
        ProjectList.data.results.length > 0 &&
        ProjectList.data.results.map((element) => {
          return (
            <>
              <p>{element}</p>
            </>
          );
        })}
    </>
  ) : (
    "loading"
  );
};

export default Details;
