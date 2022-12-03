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
