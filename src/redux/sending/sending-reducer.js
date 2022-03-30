import * as actionTypes from './sending-types';

export const REVIEW_STATE = {
	id: '',
	name: '',
	text: '',
	rating: '',
	mail: '',
	form: '',
	isError: false,
	isLoader: false,
	isClose: false,
	isSubscibe: false,
}

const sendingReducer = (store = REVIEW_STATE, action) => {
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
		case actionTypes.SEND_EMAIL:

			return {
				...store,
				mail: action.payload.mail,
				form: action.payload.form,
				isLoader: true,
				isSubscibe: false,
			}
		case actionTypes.UPLOAD:

			return {
				...store,
				isLoader: true,
				isClose: false,
			}

		case actionTypes.UPLOAD_ERROR:

			return {
				...store,
				isError: true,
				isLoader: false,
			}
		case actionTypes.UPLOAD_SUCCESS:

			return {
				...store,
				isError: false,
				isLoader: false,
				isClose: true,
				isSubscibe: true,
				id: '',
				name: '',
				text: '',
				rating: '',
				mail: '',
			}
		case actionTypes.CLOSE_REVIEW_FORM:

			return {
				...store,
				isClose: false,
				id: '',
				name: '',
				text: '',
				rating: '',
				mail: '',
				isSubscibe: false,
				isError: false,
			}
		default:

			return store;
	}
};

export default sendingReducer;

