import axios from "axios";
import { put, call, takeLatest } from 'redux-saga/effects';
import { getProducts, getProductsError, getProductsSuccess, } from "../Shopping/shopping-actions";
import { UPLOAD_DATA } from "./review-types";

export function* productsRequestWorker() {
	try {
		yield put(getProducts())
		const { data } = yield call(axios.get, "https://training.cleverland.by/shop/products");
		yield put(getProductsSuccess(data));
	} catch (err) {
		yield put(getProductsError())
	}
}

export function* productsRequestWatcher() {
	yield takeLatest(UPLOAD_DATA, productsRequestWorker)
}