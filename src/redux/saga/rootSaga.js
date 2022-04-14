import { all } from 'redux-saga/effects';
import {
	countriesRequestWatcher,
	productsRequestWatcher,
	sendPaymentDataWatcher
} from ".";
import { postWatcher } from '../sending/sending-saga';

export default function* rootSaga() {
	yield all([
		(productsRequestWatcher()),
		(postWatcher()),
		(countriesRequestWatcher()),
		(sendPaymentDataWatcher()),
	])
}