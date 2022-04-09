import axios from "axios";
import { put, call, takeLatest } from 'redux-saga/effects';
import { getCountries, getProducts, getProductsError, getProductsSuccess, } from "../Shopping/shopping-actions";
import { LOAD_DATA, REQUEST_DATA_COUNTRIES } from "../Shopping/shopping-types";

export function* productsRequestWorker() {
	try {
		yield put(getProducts())
		const { data } = yield call(axios.get, "https://training.cleverland.by/shop/products");
		yield put(getProductsSuccess(data));
	} catch (err) {
		yield put(getProductsError())
	}
}

export function* countriesRequestWorker() {
	console.log('start')
	try {
		const { data } = yield call(axios.get, "https://training.cleverland.by/shop/countries");
		yield put(getCountries(data));
	} catch (err) {

	}
}

export function* productsRequestWatcher() {
	yield takeLatest(LOAD_DATA, productsRequestWorker);
}

export function* countriesRequestWatcher() {
	yield takeLatest(REQUEST_DATA_COUNTRIES, countriesRequestWorker);
}