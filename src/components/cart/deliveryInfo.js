import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './css/deliveryInfo.css';
import TextErrorDelivery from './errorDelivery';

function DeliveryInfo() {
	const initialValues = {
		method: 'Pickup from post offices',
		phone: '',
		mail: '',
		country: '',
		city: '',
		street: '',
		house: '',
		apartment: '',
		postcode: '',
		storeAdress: '',
		check: '',
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
		country: Yup.string().required('Поле должно быть заполнено'),
		city: Yup.string().required('Поле должно быть заполнено'),
		street: Yup.string().required('Поле должно быть заполнено'),
		house: Yup.string().required('Поле должно быть заполнено'),

		check: Yup.string().required('Вы должны согласиться на обработку личной информации')
	});

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{formik => {
				console.log('formik', formik)
				return (
					<Form className="delivery-info">
						<div className="choose-method">
							<div className="choose-method__title">Choose the method of delivery of the items</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_1"
										name="method"
										className="choose-method__item"
										value="Pickup from post offices"
									/>
									<span className='radio-lable'>Pickup from post offices</span></label>
							</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_2"
										name="method"
										className="choose-method__item"
										value="Express delivery" />
									<span className='radio-lable'>Express delivery</span></label>
							</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_3"
										name="method"
										className="choose-method__item"
										value="Store pickup" />
									<span className='radio-lable'>Store pickup</span></label>
							</div >
						</div>
						<div className="choose-info">
							<label htmlFor="phone" className='choose-info__title'>Phone</label>
							<div className='choose-info__item'>
								<Field
									type="text"
									id="phone"
									name="phone"
									className="choose-info__input"
									placeholder="+375  (_ _) _ _ _ _ _ _ _"
									style={(formik.touched.phone && !formik.values.phone) ? { border: "1px solid red" } : null}
								/>
								<ErrorMessage name="phone" component={TextErrorDelivery} />
							</div>
							<label htmlFor="mail" className='choose-info__title'>E-mail</label>
							<div className='choose-info__item'>
								<Field
									type="text"
									id="mail"
									name="mail"
									className="choose-info__input"
									placeholder="e-mail"
									style={(formik.touched.mail && !formik.values.mail) ? { border: "1px solid red" } : null}
								/>
								<ErrorMessage name="mail" component={TextErrorDelivery} />
							</div>

							{(formik.values.method !== "Store pickup") && <div>
								<label htmlFor="adress" className='choose-info__title'>Adress</label>
								{(formik.values.method === "Pickup from post offices") && <div className='choose-info__item'>
									<Field
										type="text"
										id="adress"
										name="country"
										className="choose-info__input"
										placeholder="Country"
										value={(formik.values.method === "Pickup from post offices") ? "Беларусь" : ''}
									/>
									<ErrorMessage name="country" component={TextErrorDelivery} />
								</div>}
								{(formik.values.method === "Express delivery") && <div className='choose-info__item'>
									<Field
										type="text"
										id="adress"
										name="country"
										className="choose-info__input"
										placeholder="Country"
										style={(formik.touched.country && !formik.values.country) ? { border: "1px solid red" } : null}
									/>
									<ErrorMessage name="country" component={TextErrorDelivery} />
								</div>}
								<div className='choose-info__item'>
									<Field
										type="text"
										name="city"
										className="choose-info__input"
										placeholder="City"
										style={(formik.touched.city && !formik.values.city) ? { border: "1px solid red" } : null}
									/>
									<ErrorMessage name="city" component={TextErrorDelivery} />
								</div>
								<div className='choose-info__item'>
									<Field
										type="text"
										name="street"
										className="choose-info__input"
										placeholder="Street"
										style={(formik.touched.street && !formik.values.street) ? { border: "1px solid red" } : null}
									/>
									<ErrorMessage name="street" component={TextErrorDelivery} />
								</div>
								<div className='choose-info__item house'>
									<div className='choose-info-house'>
										<Field
											type="text"
											name="house"
											className="choose-info__input"
											placeholder="House"
											style={(formik.touched.house && !formik.values.house) ? { border: "1px solid red" } : null}
										/>
										<ErrorMessage name="house" component={TextErrorDelivery} />
									</div>
									<div className='choose-info-house'>
										<Field
											type="text"
											name="adress.apartment"
											className="choose-info__input"
											placeholder="Apartment"
										/>
									</div>
								</div>
							</div>}
						</div>
						{
							(formik.values.method === "Pickup from post offices") && <div className="choose-postcode">
								<label htmlFor="post-code" className='choose-info__title'>Post code</label>
								<div className='choose-info__item'>
									<Field
										type="text"
										id="post-code"
										name="postcode"
										className="choose-info__input"
										placeholder="BY _ _ _ _ _ _"
									/>
									<ErrorMessage name="postcode" component={TextErrorDelivery} />
								</div>
							</div>
						}
						{(formik.values.method === "Store pickup") && <div>
							<label htmlFor="storeAdress" className='choose-info__title'>Adress of store</label>
							<div className='choose-info__item'>
								<Field
									type="text"
									id="storeAdress"
									name="country"
									className="choose-info__input"
									placeholder="Counrty"
									style={formik.touched.country ? { border: "1px solid red" } : null}
								/>
								<ErrorMessage name="storeAdress" component={TextErrorDelivery} />
							</div>
							<div className='choose-info__item'>
								<Field
									type="text"
									id="storeAdress"
									name="storeAdress"
									className="choose-info__input"
									placeholder="Store adress"
									style={formik.touched.storeAdress ? { border: "1px solid red" } : null}
								/>
								<ErrorMessage name="storeAdress" component={TextErrorDelivery} />
							</div>
						</div>}
						<div >
							<label className="agree-information">
								<Field
									type="checkbox"
									id="check"
									name="check"
									className="check-agree"
								/>
								<span className='check-box'></span>
								<span className="check-agree-text">I agree to the processing of my personal information</span>
								<ErrorMessage name="check" component={TextErrorDelivery} />
							</label>
						</div>
					</Form>
				)
			}}
		</Formik >
	)
}

export default DeliveryInfo;