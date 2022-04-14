import * as actionTypes from './shopping-types';

export const addToCart = (itemID, itemColor, itemSize, itemImage, itemPrice, itemName) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: itemID,
			color: itemColor,
			size: itemSize,
			image: itemImage,
			price: itemPrice,
			name: itemName,
		}
	}
}

export const removeFromCart = (itemID, itemColor, itemSize) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			id: itemID,
			color: itemColor,
			size: itemSize,

		}
	}
}

export const adjustQty = (itemID, itemColor, itemSize, value) => {
	return {
		type: actionTypes.ADJUST_QTY,
		payload: {
			id: itemID,
			color: itemColor,
			size: itemSize,
			qty: value,
		}
	}
}

export const getProductsSuccess = (data) => {
	return {
		type: actionTypes.GET_PRODUCTS_SUCCESS,
		payload: data,
	}
}

export const getProductsError = (error) => {
	return {
		type: actionTypes.GET_PRODUCTS_ERROR,

	}
}

export const getProducts = (success) => {
	return {
		type: actionTypes.GET_PRODUCTS,
	}
}

export const loadData = () => {
	return {
		type: actionTypes.LOAD_DATA,
	}
}

export const getProductById = (dataItem, typeItem) => {

	return {
		type: actionTypes.GET_PRODUCT_BY_ID,
		payload: {
			data: dataItem,
			type: typeItem,
		}
	}
}

export const getCountries = (dataItems) => {

	return {
		type: actionTypes.GET_COUNTRIES,
		payload: dataItems,
	}
}

export const requestDataCountries = () => {

	return {
		type: actionTypes.REQUEST_DATA_COUNTRIES,
	}
}

export const sendPaymentData = (dataPayment, cartItems, price) => {
	return {
		type: actionTypes.SEND_PAYMENT_DATA,
		payload: {
			data: dataPayment,
			cart: cartItems,
			totalPrice: price,
		}
	}
}

export const getPaymentResult = (result) => {

	return {
		type: actionTypes.GET_PAYMENT_RESULT,
		payload: result
	}
}

export const clearCart = () => {

	return {
		type: actionTypes.CLEAR_CART,
	}
}