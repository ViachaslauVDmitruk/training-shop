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

export const fetchProducts = () => {
	return {
		type: actionTypes.LOAD_DATA
	}
}

// export const get

// export const loadCurrentItem = (item) => {
// 	return {
// 		type: actionTypes.LOAD_CURRENT_ITEM,
// 		payload: item,
// 	}
// }