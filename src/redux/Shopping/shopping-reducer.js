import cart from '../../components/cart/cart';
import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	products: {},
	cart: [],
	currentItem: null,
	isError: false,
	isLoading: true,
	countries: [],
	paymentMessage: {},
}

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS:

			return {
				...state,
				isLoading: true,
			}
		case actionTypes.GET_PRODUCTS_ERROR:

			return {
				...state,
				isError: true,
				isLoading: false,
			}
		case actionTypes.GET_PRODUCTS_SUCCESS:

			return {
				...state,
				products: action.payload,
				isLoading: false,
			};
		case actionTypes.GET_PRODUCT_BY_ID:

			return {
				...state,
				isLoading: false,
				products: {
					...state.products,
					[action.payload.type]: [
						...state.products[action.payload.type].map((item) => {
							if (item.id === action.payload.data.id) {

								return action.payload.data
							} else {

								return item
							}
						})
					]
				}
			}
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
		case actionTypes.GET_COUNTRIES:

			return {
				...state,
				countries: action.payload,
			}
		case actionTypes.GET_PAYMENT_RESULT:

			return {
				...state,
				paymentMessage: action.payload,
			}

		case actionTypes.CLEAR_CART:

			return {
				...state,
				cart: [],
			}

		default:

			return state;
	}
};

export default shopReducer;

