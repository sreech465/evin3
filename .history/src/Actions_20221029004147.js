import axios from "axios";

import {
  LOGIN_SUCESS,
  PROCESS_SUCESS,
  PROJECT_SUCESS,
  EQUIPMENT_SUCESS,
} from "./types";

const apiBaseUrl = "http://52.139.224.15:81/account/";
const adminbaseurl = "http://52.139.224.15:81/";
const baseUrl = "http://52.139.224.15:81/account/login/";

export const loginAction = (username, password, navigate) => {
  console.log(username, password, "action");
  return async (dispatch) => {
    const formData = {
      username: username,
      password: password,
    };

    try {
      await axios.post(baseUrl, formData).then((response) => {
        console.log("response from api", response.data);
        if (response.status == 200) {
          dispatch({ type: LOGIN_SUCESS, payload: response.data });
          navigate("/display");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProjectDetails = (access_token) => {
  console.log(access_token);
  return async (dispatch) => {
    let config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };

    try {
      await axios
        .get(
          "http://52.139.224.15:81/my_project_list/?search=&page=1&ordering=-id&project_status=&solution_org=",
          config
        )
        .then((response) => {
          console.log("response from api", response);
          if (response.status == 200) {
            dispatch({ type: PROCESS_SUCESS, payload: response });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProcesslines = (access_token) => {
  console.log(access_token);
  return async (dispatch) => {
    let config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };

    try {
      await axios
        .get(
          "http://52.139.224.15:81/end_user/process_line/?primary_product=all&org_location=&query=&page=1&sort_by=-id&installed_by=",
          config
        )
        .then((response) => {
          console.log("response from api", response);
          if (response.status == 200) {
            dispatch({ type: PROJECT_SUCESS, payload: response });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getEquipmentDetails = (access_token) => {
  console.log(access_token);
  return async (dispatch) => {
    let config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };

    try {
      await axios
        .get(
          "http://52.139.224.15:81/tagged_equipment_list/?search=&page=1&ordering=-status&process_line__org_location__name=&process_line__name=&system=&oem_org_id=&process_line__primary_product_ref__name=&equipment_select=&process_line__installed_by=",
          config
        )
        .then((response) => {
          console.log("response from api", response);
          if (response.status == 200) {
            dispatch({ type: EQUIPMENT_SUCESS, payload: response });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
};
