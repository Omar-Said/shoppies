import * as types from "../constants/constants";

const initialState = {
  success: false,
  loading: false,
  title: "",
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_TITLE_CHANGE: {
      return { ...state, loading: true, success: false, title: action.payload };
    }

    case types.SEARCH_TITLE_SUCCESS:
      return { ...state, loading: false, success: true };
    case types.SEARCH_TITLE_FAILURE:
      return { ...state, loading: false, success: false };
    default:
      return state;
  }
};

export default inputReducer;
