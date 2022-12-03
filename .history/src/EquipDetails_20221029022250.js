import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getEquipmentDetails1 } from "./Actions";

const EquipDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  useEffect(() => {
    dispatch(getEquipmentDetails1(access_token, id));
  }, []);
  return <div>oooooooo</div>;
};

export default EquipDetails;
