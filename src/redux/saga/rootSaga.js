import { all } from 'redux-saga/effects';
import { productsRequestWatcher } from ".";
import { postWatcher } from '../sending/sending-saga';

export default function* rootSaga() {
	yield all([
		(productsRequestWatcher()),
		(postWatcher()),
	])
}