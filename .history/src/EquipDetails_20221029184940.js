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

  const EquipmentList1 = useSelector(
    (state) => state.EquipmentReducer1.JERRY.data
  );
  console.log(EquipmentList1);

  useEffect(() => {
    dispatch(getEquipmentDetails1(access_token, id));
  }, []);
  return (
    <>
      <div class="card" style={{ display: "flex" }}>
        <img
          style={{ width: 170, height: 90 }}
          class="card-img-top"
          src={EquipmentList1.equipment_image}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{EquipmentList1.equipment_id}</h5>
          <p class="card-text">
            {EquipmentList1.line_org_location}{" "}
            {EquipmentList1.installed_by_name}.
          </p>
          <p class="card-text">
            {EquipmentList1.status} {EquipmentList1.tagged_by}.
          </p>

          <p class="card-text">
            {EquipmentList1.created_on}{" "}
            {EquipmentList1.line_template_details.line_name}.
          </p>

          <p class="card-text">
            {EquipmentList1.tagging_details.tagged_by}{" "}
            {EquipmentList1.line_template_details.line_name}.
          </p>
        </div>
      </div>
    </>
  );
};

export default EquipDetails;
