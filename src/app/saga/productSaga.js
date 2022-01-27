import { call, put } from "redux-saga/effects";
import { productActions} from "../reducers/productReducer";
import {product} from "../services/apiService";

export default function* productSaga() {
    try {
      const response = yield call(
        product
      );
      debugger;
      if (response.status === 200) {
        if (response.data) {
          yield put(productActions.fetchProductSuccess(response.data));
        } else {
          yield put(productActions.fetchProductFailure(response.data));
        }
      }
    } catch (e) {
      yield put(productActions.fetchProductFailure(e));
    }
  }