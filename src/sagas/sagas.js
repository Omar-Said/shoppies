import * as types from "../constants/constants";
import { getMovies } from "../middleware/middleware";
import { takeLatest, put, call } from "redux-saga/effects";

function* getMoviesSaga(action) {
  try {
    const payload = yield call(getMovies, action.payload);
    yield put({
      type: types.GET_TITLE_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: types.GET_TITLE_FAILURE,
      payload: error,
    });
  }
}

// function* removeItemSaga(action) {
//   yield put({
//     type: types.REMOVE_SUCCESS,
//     payload: action.payload,
//   });
// }

// export function* removeItemSaga() {
//   yield takeLatest(types.REMOVE_ITEM, removeItemSaga);
// }

export function* watchGetMoviesSaga() {
  yield takeLatest(types.SEARCH_TITLE_CHANGE, getMoviesSaga);
}
