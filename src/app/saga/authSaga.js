import { call, put } from "redux-saga/effects";
import { authActions} from "../reducers/authReducer";
import {auth} from "../services/apiService";

export default function* authSaga(data) {
    try {
      debugger;
      const response = yield call(
        auth
      );
      console.log("response",response)
      debugger;
      if (response.status === 200) {
        if (response.data) {
          yield put(authActions.fetchAuthSuccess(response.data));
        } else {
          yield put(authActions.fetchAuthFailure(response.data));
        }
      }
    } catch (e) {
      console.log("error",e)
      yield put(authActions.fetchAuthFailure(e));
    }
  }