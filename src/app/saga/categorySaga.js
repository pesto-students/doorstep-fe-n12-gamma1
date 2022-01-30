import { call, put } from "redux-saga/effects";
import { categoryActions} from "../reducers/categoryReducer";
import * as service from "../services/authService";


export default function* categorySaga(data) {
    try {
      const response = yield call(
        service.category,data.payload
      );
      debugger;
      if (response.status === 200) {
        if (response.data) {
          yield put(categoryActions.fetchCategorySuccess(response.data));
        } else {
          yield put(categoryActions.fetchCategoryFailure(response.data));
        }
      }
    } catch (e) {
      debugger;
      console.log("error",e)
      yield put(categoryActions.fetchCategoryFailure(e));
    }
  }