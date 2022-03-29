import axios from "axios";
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { uploadReview, uploadReviewError, uploadReviewSuccess } from "./review-actions";
import { UPLOAD_DATA } from "./review-types";
export { REVIEW_STATE } from './review-reducer'

export function* reviewPostWorker() {
	const review = yield select(s => s.review)
	try {
		yield put(uploadReview())
		yield call(axios.post, "https://training.cleverland.by/shop/product/review",
			{
				id: review.id,
				name: review.name,
				text: review.text,
				rating: review.rating,
			}
		);
		yield put(uploadReviewSuccess());
	} catch (err) {
		yield put(uploadReviewError)
	}
}

export function* reviewPostWatcher() {
	yield takeLatest(UPLOAD_DATA, reviewPostWorker)
}