import axios from "axios";
import { put, call, takeLatest } from 'redux-saga/effects';
import { getAdressStore, getCountries, getPaymentResult, getProducts, getProductsError, getProductsSuccess, } from "../Shopping/shopping-actions";
import { LOAD_DATA, REQUEST_ADRESS_STORE, REQUEST_DATA_COUNTRIES, SEND_PAYMENT_DATA } from "../Shopping/shopping-types";

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
	try {
		const { data } = yield call(axios.get, "https://training.cleverland.by/shop/countries");
		yield put(getCountries(data));
	} catch (err) {

	}
}

export function* adressStoreRequesWorker(action) {
	try {
		const responseAdress = yield call(axios.post, "https://training.cleverland.by/shop/search/cities", {
			city: action.payload.city,
			country: action.payload.country,
		});
		yield put(getAdressStore(responseAdress));
	} catch (err) {

	}
}

export function* sendPaymentDataWorker(action) {
	try {
		const response = yield call(axios.post, "https://training.cleverland.by/shop/cart", {
			products: [
				...action.payload.cart.map((item) => {

					return {
						name: item.name,
						size: item.size,
						color: item.color,
						qty: item.qty,
					}
				})
			],
			deliveryMethod: action.payload.data.deliveryMethod,
			paymentMethod: action.payload.data.paymentMethod === "Visa" || "Master",
			totalPrice: action.payload.totalPrice,
			phone: `+${Number(action.payload.data.phone.replace(/\D+/g, ""))}`,
			email: action.payload.data.email,
			country: action.payload.data.country,
			cashEmail: action.payload.data.cashEmail,
			city: action.payload.data.city,
			street: action.payload.data.street,
			house: action.payload.data.house,
			apartment: action.payload.data.apartment,
			postcode: action.payload.data.postcode,
			storeAddress: action.payload.data.storeAddress,
			card: action.payload.data.card,
			cardDate: action.payload.data.cardDate,
			cardCVV: action.payload.data.cardCVV,
		});
		yield put(getPaymentResult(response.data));
	} catch (err) {

	}
}



export function* productsRequestWatcher() {
	yield takeLatest(LOAD_DATA, productsRequestWorker);
}

export function* countriesRequestWatcher() {
	yield takeLatest(REQUEST_DATA_COUNTRIES, countriesRequestWorker);
}

export function* adressStoreRequestWatcher() {
	yield takeLatest(REQUEST_ADRESS_STORE, adressStoreRequesWorker);
}

export function* sendPaymentDataWatcher() {
	yield takeLatest(SEND_PAYMENT_DATA, sendPaymentDataWorker);
}

