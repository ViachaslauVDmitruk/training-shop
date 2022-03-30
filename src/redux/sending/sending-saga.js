import axios from "axios";
import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getProducts, getProductsError, getProductsSuccess } from "../Shopping/shopping-actions";
import { closeReviewForm, upload, uploadError, uploadSuccess } from "./sending-actions";
import { SEND_EMAIL, SEND_LOAD_DATA } from "./sending-types";

export function* reviewPostWorker(action) {
	try {
		yield put(upload());
		yield call(axios.post, "https://training.cleverland.by/shop/product/review", {
			id: action.payload.id,
			name: action.payload.name,
			text: action.payload.text,
			rating: Number(action.payload.rating),
		});
		yield put(uploadSuccess());
		yield put(closeReviewForm());
		yield put(getProducts())
		const { data } = yield call(axios.get, "https://training.cleverland.by/shop/products");
		yield put(getProductsSuccess(data));
	} catch (err) {
		yield put(uploadError());
		yield put(getProductsError());
	}

}
export function* subscribePostWorker(action) {
	try {
		yield put(upload());
		yield call(axios.post, "https://training.cleverland.by/shop/email", {
			mail: action.payload.mail,
		});
		yield put(uploadSuccess());
		yield delay(2000);
		yield put(closeReviewForm());
	} catch (err) {
		yield put(uploadError());
		yield delay(2000);
		yield put(closeReviewForm());
	}
}

export function* postWatcher() {
	yield takeLatest(SEND_LOAD_DATA, reviewPostWorker);
	yield takeLatest(SEND_EMAIL, subscribePostWorker);
}