import * as actionTypes from './review-types';

export const getReviewInfo = (reiewID, reviewName, reviewText, reviewRating) => {
	return {
		type: actionTypes.GET_REVIEW_INFO,
		payload: {
			id: reiewID,
			name: reviewName,
			text: reviewText,
			rating: reviewRating,
		}
	}
}

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

export const uploadData = () => {
	return {
		type: actionTypes.UPLOAD_DATA,
	}
}