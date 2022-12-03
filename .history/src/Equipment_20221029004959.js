import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEquipmentDetails } from "./Actions";

const Equipment = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );

  const EquipmentList = useSelector((state) => state.EquipmentReducer.Data101);
  console.log(EquipmentList);

  useEffect(() => {
    dispatch(getEquipmentDetails(access_token));
  }, []);
  return <div>nnnnnnnnnnn</div>;
};

export default Equipment;
