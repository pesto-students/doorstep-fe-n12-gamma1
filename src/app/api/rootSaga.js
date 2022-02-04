// import { takeLatest } from "@redux-saga/core/effects";
import { takeEvery, all } from "@redux-saga/core/effects";
import { authActions } from "../reducers/authReducer";
import authSaga from "../saga/authSaga";
import {userActions} from "../reducers/userReducer";
import userSaga from "../saga/userSaga";
import { fileUploadActions } from "../reducers/fileUploadReducer";
import fileUploadSaga from "../saga/fileUploadSaga";
import { categoryActions } from "../reducers/categoryReducer";
import categorySaga from "../saga/categorySaga";
import { productActions } from "../reducers/productReducer";
import productSaga from "../saga/productSaga";
import orderSaga from "../saga/orderSaga";
import { orderActions } from "../reducers/orderReducer";
// export default function* rootSaga() {
//     yield takeLatest(
//         authActions.fetchAuth.type,
//         authSaga
//     )
    
// }

export default function* rootSaga(){
    
    yield all([
        takeEvery(authActions.fetchAuth.type, authSaga),
        takeEvery(userActions.fetchAuth.type, userSaga),
        takeEvery(fileUploadActions.fileUpload.type, fileUploadSaga),
        takeEvery(categoryActions.fetchCategory.type, categorySaga),
        takeEvery(productActions.fetchProduct.type, productSaga),
        takeEvery(orderActions.fetchOrder.type,orderSaga)
      ]);
}