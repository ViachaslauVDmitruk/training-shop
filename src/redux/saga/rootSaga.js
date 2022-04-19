import { all } from 'redux-saga/effects';
import {
	adressStoreRequestWatcher,
	countriesRequestWatcher,
	productsRequestWatcher,
	sendPaymentDataWatcher
} from "./shopping-saga";
import { postWatcher } from '../sending/sending-saga';

export default function* rootSaga() {
	yield all([
		(productsRequestWatcher()),
		(postWatcher()),
		(countriesRequestWatcher()),
		(sendPaymentDataWatcher()),
		(adressStoreRequestWatcher()),
	])
}