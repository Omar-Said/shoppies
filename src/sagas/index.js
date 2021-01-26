import { fork } from "redux-saga/effects";
import { watchGetMoviesSaga } from "./sagas";

export default function* rootSaga() {
  yield fork(watchGetMoviesSaga);
}
