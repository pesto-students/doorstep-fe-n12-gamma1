import { call, put } from "redux-saga/effects";
import { orderListActions} from "../reducers/orderListReducer";
import {orderList} from "../services/apiService";

export default function* orderListSaga() {
    try {
      const response = yield call(
        orderList
      );
      debugger;
      if (response.status === 200) {
        if (response.data) {
          yield put(orderListActions.fetchOrderListSuccess(response.data));
        } else {
          yield put(orderListActions.fetchOrderListFailure(response.data));
        }
      }
    } catch (e) {
      yield put(orderListActions.fetchOrderListFailure(e));
    }
  }