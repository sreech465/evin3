import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProcesslines } from "./Actions";

const Process = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  useEffect(() => {
    dispatch(getProcesslines(access_token));
  }, []);

  return <div>hhhhhhhhhh</div>;
};

export default Process;
