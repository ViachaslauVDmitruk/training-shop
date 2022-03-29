import { all } from 'redux-saga/effects';
import { productsRequestWatcher } from ".";
import { reviewPostWatcher } from "../review/review-saga";

export default function* rootSaga() {
	yield all([
		(productsRequestWatcher()),
		(reviewPostWatcher())
	])
}