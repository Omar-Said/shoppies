import * as types from "../constants/constants";

const initialState = {
  title: "",
  axios: {
    success: false,
    loading: false,
    results: "",
  },
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_TITLE_CHANGE:
      return { ...state, title: action.payload };

    case types.GET_TITLE_SUCCESS:
      return { ...state, results: action.payload };

    default:
      return state;
  }
};

export default inputReducer;
