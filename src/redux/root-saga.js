import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
