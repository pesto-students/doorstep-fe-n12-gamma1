import { call, put } from "redux-saga/effects";
import { authActions} from "../reducers/authReducer";
import * as service from "../services/userService";

export default function* userSaga({creds}) {
    try {
      const response = yield call(service.login,creds);
      if (response.status === 200) {
        if (response.data) {
          yield put(authActions.fetchAuthSuccess(response.data));
        } else {
          yield put(authActions.fetchAuthFailure(response.data));
        }
      }
    } catch (e) {
      yield put(authActions.fetchAuthFailure(e));
    }
  }