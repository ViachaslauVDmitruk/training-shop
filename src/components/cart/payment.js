import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextErrorDelivery from './errorDelivery';
import imgLogo01 from './img/01.png';
import imgLogo02 from './img/02.png';
import imgLogo03 from './img/03.png';
import imgEye01 from './img/eye.png';
import imgEye02 from './img/eyeSlash.png';

function Payment() {
	const initialValues = {
		method: 'Card',
		mail: '',
		card: '',
		cardDate: '',
		cardCVV: '',
	};
	const onSubmit = (values, onSubmitProps) => {
		// let successCallback = () => onSubmitProps.resetForm();
		// dispatch(sendEmail(values.mail, 2, successCallback));
		onSubmitProps.setSubmitting(false);
	};
	const validationSchema = Yup.object({
		phone: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Неверный номер').max(9, 'Неверный номер').required('Поле должно быть заполнено'),
		mail: Yup.string()
			.email('Incorrect email format')
			.matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Incorrect characters')
			.required('Поле должно быть заполнено'),
		adress: Yup
			.object({
				country: Yup.string().required('Поле должно быть заполнено'),
				city: Yup.string().required('Поле должно быть заполнено'),
				street: Yup.string().required('Поле должно быть заполнено'),
				house: Yup.string().required('Поле должно быть заполнено'),
			}),
		check: Yup.string().required('Вы должны согласиться на обработку личной информации')
	});

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{formik => {
				console.log('touched', formik.touched.adress?.country)
				return (
					<Form className="delivery-info">
						<div className="choose-method">
							<div className="choose-method__title">Method of payments</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_1"
										name="method"
										className="choose-method__item"
										value="Paypal"
									/>
									<span className='radio-lable'></span>
									<img src={imgLogo01} alt="imgLogo" />
								</label>
							</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_2"
										name="method"
										className="choose-method__item"
										value="Card" />
									<span className='radio-lable'></span>
									<img src={imgLogo02} alt="imgLogo" />
								</label>
							</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_3"
										name="method"
										className="choose-method__item"
										value="Card" />
									<span className='radio-lable'></span>
									<img src={imgLogo03} alt="imgLogo" />
								</label>
							</div >
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_3"
										name="method"
										className="choose-method__item"
										value="Cash" />
									<span className='radio-lable'>Cash</span>
								</label>
							</div >
						</div>
						<div className="choose-info">
							{(formik.values.method === "Paypal") &&
								<div>
									<lable label htmlFor="mail" className='choose-info__title'>E-mail</lable>
									<div className='choose-info__item'>

										<Field
											type="text"
											id="mail"
											name="mail"
											className="choose-info__input"
											placeholder="e-mail"
											style={formik.touched.mail ? { border: "1px solid red" } : null}
										/>
										<ErrorMessage name="mail" component={TextErrorDelivery} />
									</div>
								</div>}
							{(formik.values.method === "Card") && <div>
								<label htmlFor="adress" className='choose-info__title'>Card</label>
								<div className='choose-info__item'>
									<Field
										type="text"
										id="adress"
										name="card"
										className="choose-info__input"
										placeholder="---- ---- ---- ----"
										style={formik.touched.adress?.country ? { border: "1px solid red" } : null}
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
											style={formik.touched.adress?.house ? { border: "1px solid red" } : null}
										/>
										<ErrorMessage name="adress.house" component={TextErrorDelivery} />
									</div>
									<div className='choose-info-house'>
										<Field
											type="text"
											name="cardCVV"
											className="choose-info__input"
											placeholder="CVV"
										/>
									</div>
								</div>
							</div>}
						</div>
					</Form>
				)
			}}
		</Formik >

	)
}

export default Payment;