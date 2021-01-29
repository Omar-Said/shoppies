import * as types from "../constants/constants";

const initialState = {
  title: "",
  success: false,
  loading: false,
  results: [],
  nomination: [],
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_TITLE_CHANGE:
      return { ...state, title: action.payload, results: [] };

    case types.GET_TITLE_SUCCESS: {
      return { ...state, results: action.payload.Search };
    }

    case types.NOM_TITLE_SUCCESS: {
      return { ...state, nomination: [...state.nomination, action.payload] };
    }

    case types.REMOVE_SUCCESS: {
      return {
        ...state,
        nomination: state.nomination.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default inputReducer;
