import * as actionTypes from './review-types';

export const getReviewInfo = (reiewID, reviewName, reviewText, reviewRating) => {
	return {
		type: actionTypes.GET_REVIEW_INFO,
		payload: {
			id: reiewID,
			name: reviewName,
			text: reviewText,
			rating: reviewRating
		}
	}
}

export const upLoadReviewError = () => {

	return {
		type: actionTypes.UPLOAD_REVIEW_SUCCESS,
	}
}
export const upLoadReviewSuccess = () => {

	return {
		type: actionTypes.UPLOAD_REVIEW_SUCCESS,
	}
}