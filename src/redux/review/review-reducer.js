import * as actionTypes from './review-types';

export const REVIEW_STATE = {
	id: '',
	name: '',
	text: '',
	rating: '',
	isError: false,
	isLoader: false,
	isClose: false,
}

const reviewReducer = (store = REVIEW_STATE, action) => {
	switch (action.type) {
		case actionTypes.SEND_LOAD_DATA:

			return {
				...store,
				id: action.payload.id,
				name: action.payload.name,
				text: action.payload.text,
				rating: action.payload.rating,
				isLoader: true,
			}
		case actionTypes.UPLOAD_REVIEW:

			return {
				...store,
				isLoader: true,
				isClose: false,
			}

		case actionTypes.UPLOAD_REVIEW_ERROR:
			console.log('UPLOAD_REVIEW_ERROR')
			return {
				...store,
				isError: true,
				isLoader: false,
			}
		case actionTypes.UPLOAD_REVIEW_SUCCESS:
			console.log('UPLOAD_REVIEW_SUCCESS')
			return {
				...store,
				isError: false,
				isLoader: false,
				isClose: true,
				id: '',
				name: '',
				text: '',
				rating: '',
			}
		case actionTypes.CLOSE_REVIEW_FORM:
			console.log('CLOSE_REVIEW_FORM')
			return {
				...store,
				isClose: false,
			}

		default:

			return store;
	}
};

export default reviewReducer;

