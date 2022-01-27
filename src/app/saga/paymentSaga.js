import { call, put } from "redux-saga/effects";
import { paymentActions} from "../reducers/paymentReducer";
import {payment} from "../services/apiService";

export default function* paymentSaga() {
    try {
      const response = yield call(
        payment
      );
      debugger;
      if (response.status === 200) {
        if (response.data) {
          yield put(paymentActions.fetchPaymentSuccess(response.data));
        } else {
          yield put(paymentActions.fetchPaymentFailure(response.data));
        }
      }
    } catch (e) {
      yield put(paymentActions.fetchPaymentFailure(e));
    }
  }