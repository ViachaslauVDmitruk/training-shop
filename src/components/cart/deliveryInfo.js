import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './css/deliveryInfo.css';

function DeliveryInfo() {
	const initialValues = {
		method: '',
		phone: '',
		mail: '',
		adress: {
			country: '',
			city: '',
			street: '',
			house: '',
			apartment: '',
		},
		postcode: '',
		store: {
			country: '',
			adress: '',
		},
	};
	const onSubmit = (values, onSubmitProps) => {
		// let successCallback = () => onSubmitProps.resetForm();
		// dispatch(sendEmail(values.mail, 2, successCallback));
		onSubmitProps.setSubmitting(false);
	};
	const validationSchema = Yup.object({
		mail: Yup.string()
			.email('Incorrect email format')
			.matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'Incorrect characters')
			.required('Required name'),
	});
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{formik => {
				console.log('value', formik.values)
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
										value="post"
										checked />
									<span className='radio-lable'>Pickup from post offices</span></label>
							</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_2"
										name="method"
										className="choose-method__item"
										value="express" />
									<span className='radio-lable'>Express delivery</span></label>
							</div>
							<div className='choose-method__radio'>
								<label className='radio-button'>
									<Field
										type="radio"
										id="Choise_3"
										name="method"
										className="choose-method__item"
										value="store" />
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
								/>
							</div>
							<label htmlFor="mail" className='choose-info__title'>E-mail</label>
							<div className='choose-info__item'>
								<Field
									type="text"
									id="mail"
									name="mail"
									className="choose-info__input"
									placeholder="e-mail"
								/>
							</div>
							<label htmlFor="adress" className='choose-info__title'>Adress</label>
							<div className='choose-info__item'>
								<Field
									type="text"
									id="adress"
									name="adress.county"
									className="choose-info__input"
									placeholder="Country"
								/>
							</div>
							<div className='choose-info__item'>
								<Field
									type="text"
									name="city"
									className="choose-info__input"
									placeholder="City"
								/>
							</div>
							<div className='choose-info__item'>
								<Field
									type="text"
									name="adress.street"
									className="choose-info__input"
									placeholder="Street"
								/>
							</div>
							<div className='choose-info__item house'>
								<Field
									type="text"
									name="adress.house"
									className="choose-info__input"
									placeholder="House"
								/>
								<Field
									type="text"
									name="adress.apartment"
									className="choose-info__input"
									placeholder="Apartment"
								/>
							</div>
						</div>
						<div className="choose-postcode">
							<label htmlFor="post-code" className='choose-info__title'>Post code</label>
							<div className='choose-info__item'>
								<Field
									type="text"
									id="post-code"
									name="post"
									className="choose-info__input"
									placeholder="BY _ _ _ _ _ _"
								/>
							</div>
						</div>
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
							</label>
						</div>
					</Form>
				)
			}}
		</Formik>
	)
}

export default DeliveryInfo;