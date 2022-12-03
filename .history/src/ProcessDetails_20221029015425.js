import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProcesslines1 } from "./Actions";

const ProcessDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  useEffect(() => {
    dispatch(getProcesslines1(access_token, id));
  }, []);

  return <div>bbbbbbbbb</div>;
};

export default ProcessDetails;
