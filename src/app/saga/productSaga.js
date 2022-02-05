import { call, put } from "redux-saga/effects";
import { productActions} from "../reducers/productReducer";
import * as service from "../services/authService";


export default function* productSaga(data) {
    try {
      const response = yield call(
        service.product,data.payload
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
      debugger;
      console.log("error",e)
      yield put(productActions.fetchProductFailure(e));
    }
  }