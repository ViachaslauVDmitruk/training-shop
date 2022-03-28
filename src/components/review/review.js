import imgStar from './img/star.svg';
import './css/review.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<div className="review" onClick={() => setActive(false)}>
			<div className="review-form" onClick={e => e.stopPropagation()}>
				<form onSubmit={formik.handleSubmit}>
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
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
							autoComplete='off'
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name} />
						{formik.touched.name && formik.errors.name ? <div className='error-form'>{formik.errors.name}</div> : null}
					</div>
					<div className='review-input-text'>
						<textarea
							type="text"
							id="text" name="text"
							placeholder="Enter your review"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.text} />
						{formik.touched.text && formik.errors.text ? <div className='error-form'>{formik.errors.text}</div> : null}
					</div>
					{!formik.errors.name && !formik.errors.text ?
						<button
							className='review-sendbutton'
							type="submit"> Send
						</button>
						:
						<button disabled
							className='review-sendbutton'
							type="submit"> Send
						</button>}
				</form>
			</div>
		</div>
	)
}

export default Review;