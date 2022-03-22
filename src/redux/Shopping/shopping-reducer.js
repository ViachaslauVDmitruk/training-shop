import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	products: {},
	cart: [],
	currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS:
			console.log('action.payload get products', action.payload)
			return {
				...state,
				products: { ...state.products, ...action.payload }
			};
		case actionTypes.ADD_TO_CART:
			const item = {
				color: action.payload.color,
				size: action.payload.size,
				id: action.payload.id,
				image: action.payload.image,
				name: action.payload.name,
				price: action.payload.price,
			}
			const inCart = state.cart.find((item) => {

				return (item.id === action.payload.id) && (item.color === action.payload.color) && (item.size === action.payload.size)
			});

			return {
				...state,
				cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
			};
		case actionTypes.REMOVE_FROM_CART:

			return {
				...state,
				cart: state.cart.filter(item => ((item.id !== action.payload.id) || (item.color !== action.payload.color) || (item.size !== action.payload.size)))
			};
		case actionTypes.ADJUST_QTY:

			return {
				...state,
				cart: state.cart.map(item => ((item.id === action.payload.id) && (item.color === action.payload.color) && (item.size === action.payload.size)) ? { ...item, qty: action.payload.qty } : item)

			};
		// case actionTypes.LOAD_CURRENT_ITEM:

		// 	return {
		// 		...state,
		// 		currentItem: action.payload,
		// 	};
		default:
			return state;
	}
};

export default shopReducer;

