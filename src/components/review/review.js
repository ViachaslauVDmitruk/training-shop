import imgStar from './img/star.svg';
import './css/review.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
	name: '',
	text: '',
}
const onSubmit = values => {
	console.log('formik values', values)
	console.log('formik errors', values.errors)
	console.log('formik errors')
}

const validationSchema = Yup.object({
	name: Yup.string().required('Required name'),
	text: Yup.string().required('Required review'),
})

function Review({ active, setActive }) {

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}>
			<div className="review" onClick={() => setActive(false)} >
				<div className="review-form" onClick={e => e.stopPropagation()}>
					<Form>
						<div className="review-title">Write a review</div>
						<div className="review-rating">
							<ul className="review-rating__star">
								<li>
									<img src={imgStar} alt="amgStar" />
								</li>
								<li>
									<img src={imgStar} alt="amgStar" />
								</li>
								<li>
									<img src={imgStar} alt="amgStar" />
								</li>
								<li>
									<img src={imgStar} alt="amgStar" />
								</li>
								<li>
									<img src={imgStar} alt="amgStar" />
								</li>
							</ul>
						</div>
						<div className='review-input-name'>
							<Field
								type="text"
								id="name"
								name="name"
								placeholder="Enter your name"
								autoComplete='off'
							// {...formik.getFieldProps('name')}
							/>
							{/* {formik.touched.name && formik.errors.name ? <div className='error-form'>{formik.errors.name}</div> : null} */}
							<ErrorMessage name='name' component={TextError} />
						</div>
						<div className='review-input-text'>
							<Field
								as="textarea"
								type="text"
								id="text" name="text"
								placeholder="Enter your review"
							// {...formik.getFieldProps('text')}
							/>
							{/* {formik.touched.text && formik.errors.text ? <div className='error-form'>{formik.errors.text}</div> : null} */}
							<ErrorMessage name='text' component={TextError} />
						</div>
						<button
							className='review-sendbutton'
							type="submit"> Send
						</button>
					</Form>
				</div>
			</div>
		</Formik>
	)
}

export default Review;