import * as types from "../constants/constants";

export const input = (payload) => {
  return {
    type: types.SEARCH_TITLE_CHANGE,
    payload,
  };
};

export const nominate = (payload) => {
  return {
    type: types.NOM_TITLE_SUCCESS,
    payload,
  };
};

export const removeNom = (payload) => {
  console.log(payload);
  return {
    type: types.REMOVE_SUCCESS,
    payload,
  };
};
