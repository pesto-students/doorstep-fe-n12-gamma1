import { call, put } from "redux-saga/effects";
import { orderActions} from "../reducers/orderReducer";
import * as service from "../services/authService";


export default function* orderSaga(data) {
    try {
        let response
        if(data.payload.apiName=='payment')
        response = yield call(
          service.payment,data.payload
        );
        else
        response = yield call(
          service.order,data.payload
        );
       
      if (response.status === 200) {
        if (response.data) {
          yield put(orderActions.fetchOrderSuccess(response.data));
        } else {
          yield put(orderActions.fetchOrderFailure(response.data));
        }
      }
    } catch (e) {
      yield put(orderActions.fetchOrderFailure(e));
    }
  }