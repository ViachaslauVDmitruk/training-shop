import axios from "axios";
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getProducts, getProductsError, getProductsSuccess, } from "../Shopping/shopping-actions";
import { LOAD_DATA } from "../Shopping/shopping-types";

export function* productsRequestWorker() {
	try {
		yield put(getProducts())
		const { data } = yield call(axios.get, "https://training.cleverland.by/shop/products");
		yield delay(2000);
		yield put(getProductsSuccess(data));
		// yield put(productsRequestSuccess('false'));
	} catch (err) {
		console.log(err);
		yield put(getProductsError())
		// yield put(productsRequestError('true'));
	}
}

export function* productsRequestWatcher() {
	yield takeLatest(LOAD_DATA, productsRequestWorker)
}

// export default productsRequestWorker;
