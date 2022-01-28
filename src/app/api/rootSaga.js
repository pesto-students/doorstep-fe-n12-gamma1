import { takeLatest } from "@redux-saga/core/effects";
import { authActions } from "../reducers/authReducer";
import authSaga from "../saga/authSaga";
// authActions.fetchAuth.type,
export default function* rootSaga() {
    yield takeLatest(
        authActions.fetchAuth.type,
        authSaga
    )
}