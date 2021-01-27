import * as types from "../constants/constants";

const initialState = {
  title: "",
  success: false,
  loading: false,
  results: [],
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_TITLE_CHANGE:
      return { ...state, title: action.payload, results: [] };

    case types.GET_TITLE_SUCCESS: {
      console.log(action.payload);
      return { ...state, results: action.payload.Search };
    }

    default:
      return state;
  }
};

export default inputReducer;
