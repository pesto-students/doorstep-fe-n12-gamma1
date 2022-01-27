import { call, put } from "redux-saga/effects";
import { categoryActions} from "../reducers/categoryReducer";
import {category} from "../services/apiService";

export default function* categorySaga() {
    try {
      const response = yield call(
        category
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
      yield put(categoryActions.fetchCategoryFailure(e));
    }
  }