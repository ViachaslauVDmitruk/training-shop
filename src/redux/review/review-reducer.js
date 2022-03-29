import * as actionTypes from './review-types';

export const REVIEW_STATE = {
	id: '',
	name: '',
	text: '',
	rating: '',
	isError: false,
	isLoading: false,
}

const reviewReducer = (store = REVIEW_STATE, action) => {
	switch (action.type) {
		case actionTypes.UPLOAD_DATA:

			return {
				...store,
				isLoading: true,
			}
		case actionTypes.UPLOAD_REVIEW:

			return {
				...store,
				isLoading: true,
			}
		case actionTypes.GET_REVIEW_INFO:

			return {
				...store,
				id: action.payload.id,
				name: action.payload.name,
				text: action.payload.text,
				rating: action.payload.rating,
			}
		case actionTypes.UPLOAD_REVIEW_ERROR:
			console.log('UPLOAD_REVIEW_ERROR')
			return {
				...store,
				isError: true,
				isLoading: false,
			}
		case actionTypes.UPLOAD_REVIEW_SUCCESS:
			console.log('UPLOAD_REVIEW_SUCCESS')
			return {
				...store,
				isError: false,
				isLoading: false,
				id: '',
				name: '',
				text: '',
				rating: '',
			}

		default:

			return store;
	}
};

export default reviewReducer;

