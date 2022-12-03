import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProjectDetails } from "./Actions";

const Details = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  useEffect(() => {
    dispatch(getProjectDetails(access_token));
    // dispatch(getProcesslines(access_token));
    // dispatch(getEquipmentDetails(access_token));
  }, []);

  return <>gggggggggggggggggg</>;
};

export default Details;
