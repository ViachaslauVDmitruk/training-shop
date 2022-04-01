import * as actionTypes from './sending-types';

export const uploadError = () => {

	return {
		type: actionTypes.UPLOAD_ERROR,
	}
}
export const uploadSuccess = () => {

	return {
		type: actionTypes.UPLOAD_SUCCESS,
	}
}
export const upload = () => {

	return {
		type: actionTypes.UPLOAD,
	}
}
export const closeReviewForm = () => {

	return {
		type: actionTypes.CLOSE_REVIEW_FORM,
	}
}

export const sendLoadData = (reiewType, reiewID, reviewName, reviewText, reviewRating) => {
	return {
		type: actionTypes.SEND_LOAD_DATA,
		payload: {
			type: reiewType,
			id: reiewID,
			name: reviewName,
			text: reviewText,
			rating: reviewRating,
		}
	}
}

export const sendEmail = (subscribeMail, number, callback) => {
	return {
		type: actionTypes.SEND_EMAIL,
		payload: {
			mail: subscribeMail,
			form: number,
			clear: callback,
		}
	}
}
