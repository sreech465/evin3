import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProcesslines } from "./Actions";
import Headertabs from "./Headertabs";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Equipment from "./Equipment";
import { Link } from "react-router-dom";
import CustomSearchBar from "./CustomSearchBar";
import "./process.css";

const Process = () => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state) => state.LoginReducer.auth.access_token
  );
  console.log(access_token);

  const ProcessData = useSelector((state) => state.ProcessReducer.Data101);
  console.log(ProcessData);

  useEffect(() => {
    dispatch(getProcesslines(access_token));
  }, []);

  const [tab, setTab] = useState("Process Line");
  const tabs = (data) => {
    setTab(data);
  };

  return (
    <>
      <Headertabs />

      <CustomSearchBar data={tab === "Process Line" ? ProcessData : ""} />

      <>
        {ProcessData &&
          ProcessData.data.length > 0 &&
          ProcessData.data.map((element) => {
            return (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>primary product</th>
                      <th>Line</th>
                      <th>Capacity</th>
                      <th>status</th>
                    </tr>
                  </thead>{" "}
                  <tr>
                    {" "}
                    <div style={{ display: "flex", border: "5px solid gray" }}>
                      <td>
                        <img
                          style={{ width: 100, height: 100 }}
                          class="card-img-top"
                          src={
                            element.primary_product_details
                              .primary_product_image
                          }
                          alt="Card image cap"
                        />
                      </td>

                      <td>
                        {" "}
                        <h5 class="card-title">{element.name}</h5>
                      </td>
                      <td>
                        {" "}
                        <p class="card-text">
                          {element.line_capacity} {element.org_location_name}.
                        </p>
                      </td>
                      <td>
                        {" "}
                        <Link to={`/pdetails/${element.id}`}>
                          <button class="btn btn-primary">Details</button>
                        </Link>
                      </td>
                    </div>
                  </tr>
                </table>
              </>
            );
          })}
      </>
      {/* ) : ( "loading" ); */}
    </>
  );
};

export default Process;