import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { sendEmail } from '../../../redux/sending/sending-actions';
import './css/Part5.css';

import img01 from './img/01.png';
import img02 from './img/02.png';
import imgLoader from './img/loadersmall.gif';
import TextError from '../../review/TextError';
import ErrorSubscibe from './errorSubscribe';
import SuccessSubscibe from './successSubscribe';

function Part5() {
	const { isLoader, isError, isSubscibe, form } = useSelector(store => store.send);
	const dispatch = useDispatch();

	const initialValues = {
		mail: '',
	};
	const validationSchema = Yup.object({
		mail: Yup.string()
			.matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Incorrect characters')
			.email('Incorrect email format')
			.required('Required name'),
	});
	const onSubmit = (values, onSubmitProps) => {
		let successCallback = () => onSubmitProps.resetForm();
		dispatch(sendEmail(values.mail, 1, successCallback));
		onSubmitProps.setSubmitting(false);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{formik => {

				return (
					<Form>
						<div className="Parth5">
							<div className="parth5__center">
								<div className="parth5-center__columns">
									<div className="center-column__toptext">Special Offer</div>
									<div className="center-column__offer">Subscribe
										<br />
										And <span>Get 10% Off</span>
									</div>
									<div className="center-column__form">
										<Field
											data-test-id="main-subscribe-mail-field"
											autoComplete="off"
											id="email"
											type="text"
											name="mail"
											placeholder="Enter your email"
											className="input"
										/>
										<ErrorMessage name="mail" component={TextError} />
									</div>
									<div className="center-column__button">
										{isError && (form === 1) && <ErrorSubscibe />}
										{isSubscibe && (form === 1) && <SuccessSubscibe />}
										<button
											data-test-id="main-subscribe-mail-button"
											type="submit"
											className="center-column-button__btn"
										>
											{isLoader && <span><img src={imgLoader} alt="loader" /></span>}
											Subscribe</button>
									</div>
								</div>
								<div className="parth5-images__item item_woman">
									<img src={img01} alt="img01" />
								</div>
								<div className="parth5-images__item item_man">
									<img src={img02} alt="img02" />
								</div>
							</div>
						</div>
					</Form>
				)
			}}
		</Formik>
	);
}

export default Part5;