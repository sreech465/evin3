import { LOGIN_SUCESS, PROCESS_SUCESS } from "./types";
const initialState = {
  auth: {
    access_token: "",
    username: "",
    role_permissions: [],
  },
};

export const LoginReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case LOGIN_SUCESS:
      return {
        ...state,

        auth: action.payload,
      };

    default:
      return state;
  }
};

export const projectReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case PROCESS_SUCESS:
      return {
        ...state,

        Data100: action.payload,
      };

    default:
      return state;
  }
};
