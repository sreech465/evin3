import React from "react";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEquipmentDetails } from "./Actions";

const Equipment = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );

  useEffect(() => {
    dispatch(getEquipmentDetails(access_token));
  }, []);
  return <div>nnnnnnnnnnn</div>;
};

export default Equipment;
