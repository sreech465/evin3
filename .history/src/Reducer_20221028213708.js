import { LOGIN_SUCESS } from "./types";
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
