import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import ErrorReview from '../../review/errorReview';
import './css/Part5.css';
import img01 from './img/01.png';
import img02 from './img/02.png';

const initialValues = {
	email: '',

}
const onSubmit = (values, onSubmitProps) => {
	onSubmitProps.setSubmitting(false);
	onSubmitProps.resetForm();
}

const validationSchema = Yup.object({
	email: Yup.string().email('Incorrect email format').required('Required name'),
})

function Part5() {

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
											autoComplete="off"
											id="email"
											type="text"
											name="email"
											placeholder="Enter your email"
											className="input"
										/>
										<ErrorMessage name="email" />
									</div>
									<div className="center-column__button">
										<button
											type="submit"
											className="center-column-button__btn"
											disabled={formik.isSubmitting || !formik.isValid}
										>Subscribe</button>
										<ErrorReview />
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