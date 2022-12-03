import {
  EQUIPMENT_SUCESS,
  EQUIPMENT_SUCESSC,
  LOGIN_SUCESS,
  PROCESS_SUCESS,
  PROJECT_SUCESS,
  PROJECT_SUCESSC,
} from "./types";
const initialState = {
  auth: {
    access_token: "",
    username: "",
    role_permissions: [],
  },
  Data100: "",
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

export const processReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case PROJECT_SUCESS:
      return {
        ...state,

        Data101: action.payload,
      };

    default:
      return state;
  }
};

export const processReducer1 = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case PROJECT_SUCESSC:
      return {
        ...state,

        TOM: action.payload,
      };

    default:
      return state;
  }
};

export const equipmentReducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case EQUIPMENT_SUCESS:
      return {
        ...state,

        Data102: action.payload,
      };

    default:
      return state;
  }
};

export const equipmentReducer1 = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case EQUIPMENT_SUCESSC:
      return {
        ...state,

        JERRY: action.payload,
      };

    default:
      return state;
  }
};
