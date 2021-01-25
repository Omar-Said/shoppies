import * as types from "../constants/constants";

export const input = (payload) => {
  return {
    type: types.SEARCH_TITLE_CHANGE,
    payload,
  };
};
