import axios from "axios";
import { put, call, takeLatest } from 'redux-saga/effects';
import { closeReviewForm, upload, uploadError, uploadSuccess } from "./sending-actions";
import { SEND_EMAIL, SEND_LOAD_DATA } from "./sending-types";

export function* reviewPostWorker(action) {
	try {
		yield put(upload());
		yield call(axios.post, "https://training.cleverland.by/shop/product/review", {
			id: action.payload.id,
			name: action.payload.name,
			text: action.payload.text,
			rating: action.payload.rating,
		});
		yield put(uploadSuccess());
		yield put(closeReviewForm());
	} catch (err) {
		console.log(err)
		yield put(uploadError());
	}
}
export function* subscribePostWorker(action) {
	try {
		yield put(upload());
		yield call(axios.post, "https://training.cleverland.by/shop/email", {
			mail: action.payload.mail,
		});
		yield put(uploadSuccess());
		yield put(closeReviewForm());
	} catch (err) {
		console.log(err)
		yield put(uploadError());
	}
}

export function* postWatcher() {
	yield takeLatest(SEND_LOAD_DATA, reviewPostWorker);
	yield takeLatest(SEND_EMAIL, subscribePostWorker);
}