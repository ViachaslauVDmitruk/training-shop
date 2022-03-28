import * as actionTypes from './review-types';

export const REVIEW_STATE = {
	id: '',
	name: '',
	text: '',
	rating: '',
	isError: false,
	isLoading: false,
}

const reviewReducer = (state = REVIEW_STATE, action) => {
	switch (action.type) {
		case actionTypes.GET_ID_PRODUCT:

			return {
				...state,
				isLoading: true,
			}
		case actionTypes.GET_REVIEW_INFO:

			return {
				...state,
				isLoading: true,
			}
		case actionTypes.UPLOAD_REVIEW_ERROR:
			console.log('error', action.payload)

			return {
				...state,
				isError: true,
				isLoading: false,
			}
		case actionTypes.UPLOAD_REVIEW_SUCCESS:
			console.log('success', action.payload)

			return {
				...state,
				isError: true,
				isLoading: false,
			}

		default:

			return state;
	}
};

export default reviewReducer;

