import * as actionTypes from './review-types';

export const uploadReviewError = () => {

	return {
		type: actionTypes.UPLOAD_REVIEW_ERROR,
	}
}
export const uploadReviewSuccess = () => {

	return {
		type: actionTypes.UPLOAD_REVIEW_SUCCESS,
	}
}
export const uploadReview = () => {

	return {
		type: actionTypes.UPLOAD_REVIEW,
	}
}
export const closeReviewForm = () => {

	return {
		type: actionTypes.CLOSE_REVIEW_FORM,
	}
}

export const sendLoadData = (reiewID, reviewName, reviewText, reviewRating) => {
	return {
		type: actionTypes.SEND_LOAD_DATA,
		payload: {
			id: reiewID,
			name: reviewName,
			text: reviewText,
			rating: reviewRating,
		}
	}
}