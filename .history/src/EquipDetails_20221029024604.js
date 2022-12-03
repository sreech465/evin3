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

  const EquipmentList1 = useSelector((state) => state.EquipmentReducer1.JERRY);
  console.log(EquipmentList1);

  useEffect(() => {
    dispatch(getEquipmentDetails1(access_token, id));
  }, []);
  return (
    <>
      {EquipmentList1 &&
        EquipmentList1.data.results.length > 0 &&
        EquipmentList1.data.results.map((element) => {
          return (
            <>
              <div class="card" style={{ display: "flex" }}>
                <img
                  style={{ width: 70, height: 40 }}
                  class="card-img-top"
                  src={element.equipment_image}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{element.equipment_id}</h5>
                  <p class="card-text">
                    {element.line_org_location} {element.installed_by_name}.
                  </p>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default EquipDetails;
