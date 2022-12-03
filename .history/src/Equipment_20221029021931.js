import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEquipmentDetails } from "./Actions";
import Headertabs from "./Headertabs";
import { Link } from "react-router-dom";

const Equipment = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );

  const EquipmentList = useSelector((state) => state.EquipmentReducer.Data102);
  console.log(EquipmentList);

  useEffect(() => {
    dispatch(getEquipmentDetails(access_token));
  }, []);

  return (
    <>
      <Headertabs />
      {/* <div>
        <Routes>
          <Route path="/equipment" element={<Equipment />} />
        </Routes>
      </div> */}

      <>
        {EquipmentList &&
          EquipmentList.data.results.length > 0 &&
          EquipmentList.data.results.map((element) => {
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
                    <Link to={`/equipment/${element.id}`}>
                      <button class="btn btn-primary">Details</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
      </>
      {/* ) : ( "loading" ); */}
    </>
  );
};

export default Equipment;
