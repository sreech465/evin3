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

  return <div>bbbbbbbbb</div>;
};

export default ProcessDetails;
