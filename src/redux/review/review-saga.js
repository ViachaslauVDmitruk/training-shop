import axios from "axios";
import { put, call, takeLatest } from 'redux-saga/effects';
import { closeReviewForm, uploadReview, uploadReviewError, uploadReviewSuccess } from "./review-actions";
import { SEND_LOAD_DATA } from "./review-types";
export { REVIEW_STATE } from './review-reducer'

export function* reviewPostWorker(action) {
	try {
		yield put(uploadReview());
		yield call(axios.post, "https://training.cleverland.by/shop/product/review", {
			id: action.payload.id,
			name: action.payload.name,
			text: action.payload.text,
			rating: action.payload.rating,
		});
		yield put(uploadReviewSuccess());
		yield put(closeReviewForm());
	} catch (err) {
		console.log(err)
		yield put(uploadReviewError());
	}
}

export function* reviewPostWatcher() {
	yield takeLatest(SEND_LOAD_DATA, reviewPostWorker);
}