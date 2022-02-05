import { call, put } from "redux-saga/effects";
import { fileUploadActions} from "../reducers/fileUploadReducer";
import * as service from "../services/authService";


export default function* fileUploadSaga(data) {
    try {
      debugger;
      const response = yield call(
        service.fileUpload,data.payload
      );
      debugger;
      if (response.status === 200) {
        if (response.data) {
          yield put(fileUploadActions.fileUploadSuccess(response.data));
        } else {
          yield put(fileUploadActions.fileUploadFailure(response.data));
        }
      }
    } catch (e) {
      debugger;
      console.log("error",e)
      yield put(fileUploadActions.fileUploadFailure(e));
    }
  }