import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorDelivery from './errorDelivery';
import imgLogo01 from './img/01.png';
import imgLogo02 from './img/02.png';
import imgLogo03 from './img/03.png';


function Payment(props) {
	// const initialValues = {
	// 	method: 'Card',
	// 	mail: '',
	// 	card: '',
	// 	cardDate: '',
	// 	cardCVV: '',
	// };
	// const onSubmit = (values, onSubmitProps) => {
	// let successCallback = () => onSubmitProps.resetForm();
	// dispatch(sendEmail(values.mail, 2, successCallback));
	// onSubmitProps.setSubmitting(false);
	// };
	// const validationSchema = Yup.object({
	// 	mail: Yup.string()
	// 		.email('Incorrect email format')
	// 		.matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Incorrect characters')
	// 		.required('Поле должно быть заполнено'),
	// });

	// return (
	// 	<Formik
	// 		initialValues={initialValues}
	// 		onSubmit={onSubmit}
	// 		validationSchema={validationSchema}
	// 	>
	// 		{formik => {
	// 			console.log('touched', formik.touched.adress?.country)
	return (
		<div className="delivery-info">
			<div className="choose-method">
				<div className="choose-method__title">Method of payments</div>
				<div className='choose-method__radio'>
					<label htmlFor='choise_1' className='radio-button'>
						<Field
							type="radio"
							id="choise_1"
							name="paymentMethod"
							className="choose-method__item"
							value="PayPal"
						/>
						<span className='radio-lable'></span>
						<img src={imgLogo01} alt="imgLogo" />
					</label>
				</div>
				<div className='choose-method__radio'>
					<label htmlFor='choise_2' className='radio-button'>
						<Field
							type="radio"
							id="choise_2"
							name="paymentMethod"
							className="choose-method__item"
							value="Card"
							checked
						/>
						<span className='radio-lable'></span>
						<img src={imgLogo02} alt="imgLogo" />
					</label>
				</div>
				<div className='choose-method__radio'>
					<label htmlFor='choise_3' className='radio-button'>
						<Field
							type="radio"
							id="choise_3"
							name="paymentMethod"
							className="choose-method__item"
							value="Card" />
						<span className='radio-lable'></span>
						<img src={imgLogo03} alt="imgLogo" />
					</label>
				</div >
				<div className='choose-method__radio'>
					<label htmlFor='choise_4' className='radio-button'>
						<Field
							type="radio"
							id="choise_4"
							name="paymentMethod"
							className="choose-method__item"
							value="Cash" />
						<span className='radio-lable'>Cash</span>
					</label>
				</div >
			</div>
			<div className="choose-info">
				{(props.formik.values.paymentMethod === "Paypal") &&
					<div>
						<lable label htmlFor="mail" className='choose-info__title'>E-mail</lable>
						<div className='choose-info__item'>

							<Field
								type="text"
								id="mail"
								name="cashEail"
								className="choose-info__input"
								placeholder="e-mail"
								style={props.formik.touched.cashEmail ? { border: "1px solid red" } : null}
							/>
							<ErrorMessage name="mail" component={TextErrorDelivery} />
						</div>
					</div>}
				{(props.formik.values.paymentMethod === "Card") && <div>
					<label htmlFor="adress" className='choose-info__title'>Card</label>
					<div className='choose-info__item'>
						<Field
							type="text"
							id="adress"
							name="card"
							className="choose-info__input"
							placeholder="---- ---- ---- ----"
							style={props.formik.touched.country ? { border: "1px solid red" } : null}
						/>
						<ErrorMessage name="adress.country" component={TextErrorDelivery} />
					</div>
					<div className='choose-info__item house'>
						<div className='choose-info-house'>
							<Field
								type="text"
								name="cardDate"
								className="choose-info__input"
								placeholder="MM/YY"
								style={props.formik.touched.cardDate ? { border: "1px solid red" } : null}
							/>
							<ErrorMessage name="adress.house" component={TextErrorDelivery} />
						</div>
						<div className='choose-info-house'>
							<Field
								type="text"
								name="cardCVV"
								className="choose-info__input"
								placeholder="CVV"
								style={props.formik.touched.cardCVV ? { border: "1px solid red" } : null}
							/>
						</div>
					</div>
				</div>}
			</div>
		</div>
	)
	// 		}}
	// 	</Formik >

	// )
}

export default Payment;