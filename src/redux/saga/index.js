import axios from "axios";
import { put, call } from 'redux-saga/effects';
import { getProducts, productsRequestError } from "../Shopping/shopping-actions";

function* productsRequestWorker() {
	try {
		const { data } = yield call(axios.get, "https://training.cleverland.by/shop/products");
		yield put(getProducts(data));
	} catch (err) {
		yield put(productsRequestError(err.message));
	}
}

export default productsRequestWorker;
