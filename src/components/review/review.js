import imgLoader from './img/loadersmall.gif';
import './css/review.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import ErrorReview from './errorReview';
import { useDispatch, useSelector } from 'react-redux';
import { sendLoadData } from '../../redux/sending/sending-actions';
import { useEffect } from 'react';



function Review({ active, setActive, id, type }) {
	const dispatch = useDispatch();
	const { isLoader, isError, isClose } = useSelector(store => store.send);

	function getReviewData(type, id, name, text, rating) {
		dispatch(sendLoadData(type, id, name, text, rating));
	};

	useEffect(() => {
		if (isClose && !isLoader) {
			setActive(false)
		}
	});

	const initialValues = {
		name: '',
		text: '',
		rating: '1',
	}
	const onSubmit = (values, onSubmitProps) => {
		onSubmitProps.setSubmitting(false);
	}

	const validationSchema = Yup.object({
		name: Yup.string().required('Required name'),
		text: Yup.string().required('Required review'),
	})

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{formik => {

				return (
					<Form>
						<div className="review" onClick={() => setActive(false)} >
							<div data-test-id="review-modal" className="review-form" onClick={e => e.stopPropagation()}>
								<div className="review-title">Write a review</div>
								<div className="review-rating">
									<div className="review-rating__star">
										<Field id="star-rating__5" type="radio" className='star-rating__item' name="rating" value="5" />
										<label htmlFor="star-rating__5" className='star-rating__laber'></label>
										<Field id="star-rating__4" type="radio" className='star-rating__item' name="rating" value="4" />
										<label htmlFor="star-rating__4" className='star-rating__laber'></label>
										<Field id="star-rating__3" type="radio" className='star-rating__item' name="rating" value="3" />
										<label htmlFor="star-rating__3" className='star-rating__laber'></label>
										<Field id="star-rating__2" type="radio" className='star-rating__item' name="rating" value="2" />
										<label htmlFor="star-rating__2" className='star-rating__laber'></label>
										<Field id="star-rating__1" type="radio" className='star-rating__item' name="rating" value="1" />
										<label htmlFor="star-rating__1" className='star-rating__laber'></label>
									</div>
								</div>
								<div className='review-input-name'>
									<Field
										data-test-id="review-name-field"
										type="text"
										id="name"
										name="name"
										placeholder="Enter your name"
										autoComplete='off'
									/>
									<ErrorMessage name='name' component={TextError} />
								</div>
								<div className='review-input-text'>
									<Field
										data-test-id="review-text-field"
										as="textarea"
										type="text"
										id="text" name="text"
										placeholder="Enter your review"
									/>
									<ErrorMessage name='text' component={TextError} />
								</div>
								<button
									data-test-id="review-submit-button"
									className='review-sendbutton'
									type="submit"
									disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
									onClick={() => { getReviewData(type, id, formik.values.name, formik.values.text, formik.values.rating) }}
								>
									{isLoader && <span><img src={imgLoader} alt="loader" /></span>}
									Send
								</button>
								{isError && <ErrorReview />}
							</div>
						</div>
					</Form>
				)
			}
			}
		</Formik>
	)
}

export default Review;