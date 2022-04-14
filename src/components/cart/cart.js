import './css/cart.css';
import imgExit from './img/close.png';
import classNames from 'classnames';
import CartItem from './cartItem';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DeliveryInfo from './deliveryInfo';
import Payment from './payment';
import TotalPrice from './totalPrise';
import ViewCartButton from './viewCartButton';
import DeliveryPayButton from './devileryPayButton';

function Cart({ cart, active, setActive }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItem, setTotalItem] = useState(0);
	const [deliveryInfo, setDeliveryInfo] = useState(false);
	const [step, setStep] = useState(1);

	const currentStep = (step, props) => {
		switch (step) {
			case 1: {
				return cart.map((item) => (
					<CartItem key={item.id + item.color + item.size} productData={item} totalItem={totalItem} />
				));
			}
			case 2: {
				return <DeliveryInfo
					formik={props}
					totalPrice={totalPrice}
					title={'Further'}
					step={step}
					setStep={setStep}
				/>;
			}
			case 3: {
				return <Payment
					formik={props}
					totalPrice={totalPrice}
					titleOne={'Check out'}
					titleTwo={'Ready'}
					step={step}
					setStep={setStep}
				/>;
			}
			default:
				return null;
		}
	};

	useEffect(() => {
		let items = 0;
		let price = 0;
		cart.forEach((item) => {
			items += item.qty;
			price = Math.round((Math.round(item.qty * item.price * 100) / 100 + price) * 100) / 100;
		});
		setTotalItem(items);
		setTotalPrice(price);
		if (!active) {
			setDeliveryInfo(false);
		}
	}, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice, active]);

	const initialValues = {
		deliveryMethod: 'Pickup from post offices',
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
		paymentMethod: 'Visa',
		cashEmail: '',
		card: '',
		cardDate: '',
		cardCVV: '',
	};



	const regExMail = /^[_a-z0-9-\\+-]+(\.[_a-z0-9-]\+)*@[a-z0-9-]+(\.[a-z0-9-]\+)*(\.[a-z]{2,4})$/i;
	const regExPhone = /^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}$/;
	const regExCard = /^[\d\s]+$/;
	const regExCardDate = /^(0\d|1[0-2])\/\d{2}$/;
	const regExCVV = /^\d+$/;

	// const validationSchema = Yup.object({
	//   phone: Yup.string().matches(regExPhone, 'Неверный номер').required('Поле должно быть заполнено'),
	//   mail: Yup.string()
	//     .email('Incorrect email format')
	//     .matches(regExMail, 'Incorrect characters')
	//     .required('Поле должно быть заполнено'),
	//   country: Yup.string().required('Поле должно быть заполнено'),
	//   city: Yup.string().required('Поле должно быть заполнено'),
	//   street: Yup.string().required('Поле должно быть заполнено'),
	//   house: Yup.string().required('Поле должно быть заполнено'),
	//   postcode: Yup.string().required('Поле должно быть заполнено'),
	//   check: Yup.string().required('Вы должны согласиться на обработку личной информации'),
	//   cashEmail: Yup.string()
	//     .email('Incorrect email format')
	//     .matches(regExMail, 'Incorrect characters')
	//     .required('Поле должно быть заполнено'),
	//   card: Yup.string()
	//     .matches(/^[\d\s]+$/, 'Некорректный номер')
	//     .min(19, 'Должно быть 16 цифр')
	//     .max(19, 'Должно быть 16 цифр')
	//     .required('Поле должно быть заполнено'),
	//   cardDate: Yup.string().required('Поле должно быть заполнено'),
	//   cardCVV: Yup.string()
	//     .matches(/^\d+$/, 'Только цифры')
	//     .min(3, 'Минимум 3 цифры')
	//     .max(4, 'максимум 4 цифры')
	//     .required('Поле должно быть заполнено'),
	// });

	let validSchemaStepTwo = Yup.object().shape({
		phone: Yup.string().matches(regExPhone, 'Неверный номер').required('Поле должно быть заполнено'),
		mail: Yup.string()
			.email('Incorrect email format')
			.matches(regExMail, 'Incorrect characters')
			.required('Поле должно быть заполнено'),
		country: Yup.string().required('Поле должно быть заполнено'),

		city: Yup.string().when('deliveryMethod', {
			is: 'Pickup from post offices' || 'Express delivery',
			then: Yup.string()
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		street: Yup.string().when('deliveryMethod', {
			is: 'Pickup from post offices' || 'Express delivery',
			then: Yup.string()
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		house: Yup.string().when('deliveryMethod', {
			is: 'Pickup from post offices' || 'Express delivery',
			then: Yup.string()
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		postcode: Yup.string().when('deliveryMethod', {
			is: 'Pickup from post offices',
			then: Yup.string().required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),
		check: Yup.boolean().required('Вы должны согласиться на обработку личной информации'),
	});

	let validSchemaStepThree = Yup.object().shape({
		cashEmail: Yup.string().when('paymentMethod', {
			is: 'Paypal',
			then: Yup.string()
				.email('Incorrect email format')
				.matches(regExMail, 'Incorrect characters')
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		// cashEmail: Yup.string()
		// 	.email('Incorrect email format')
		// 	.matches(regExMail, 'Incorrect characters')
		// 	.required('Поле должно быть заполнено'),

		card: Yup.string().when('paymentMethod', {
			is: 'Visa',
			then: Yup.string()
				.matches(regExCard, 'Некорректный номер')
				.min(19, 'Должно быть 16 цифр')
				.max(19, 'Должно быть 16 цифр')
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		// card: Yup.string()
		// 	.matches(regExCard, 'Некорректный номер')
		// 	.min(19, 'Должно быть 16 цифр')
		// 	.max(19, 'Должно быть 16 цифр')
		// 	.required('Поле должно быть заполнено'),

		cardDate: Yup.string().when('paymentMethod', {
			is: 'Visa',
			then: Yup.string()
				.matches(regExCardDate, 'только цифры').required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		// cardDate: Yup.string()
		// 	.matches(regExCardDate, 'только цифры').required('Поле должно быть заполнено'),

		cardCVV: Yup.string().when('paymentMethod', {
			is: 'Visa',
			then: Yup.string()
				.matches(regExCVV, 'Только цифры').required('Поле должно быть заполнено')
				.min(3, 'Минимум 3 цифры')
				.max(4, 'максимум 4 цифры')
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		// cardCVV: Yup.string()
		// 	.matches(regExCVV, 'Только цифры').required('Поле должно быть заполнено')
		// 	.min(3, 'Минимум 3 цифры')
		// 	.max(4, 'максимум 4 цифры')
		// 	.required('Поле должно быть заполнено'),
	});

	const validationSchema = (step) => {
		switch (step) {
			case 1:
				return Yup.object().shape({});
			case 2:
				return validSchemaStepTwo;
			case 3:
				return validSchemaStepThree;
			default:
				return Yup.object({}).shape({});
		}
	};

	const onSubmit = (values, onSubmitProps) => {
		// let successCallback = () => onSubmitProps.resetForm();

		onSubmitProps.setTouched({
			phone: false,
			mail: false,
			country: false,
			city: false,
			street: false,
			house: false,
			apartment: false,
			postcode: false,
			storeAdress: false,
			check: false,
			cashEmail: false,
			card: false,
			cardDate: false,
			cardCVV: false,
		})
		switch (step) {
			case 1:

				setStep(2);

				// onSubmitProps.validateForm();
				onSubmitProps.setSubmitting(false);
				break;
			case 2:
				onSubmitProps.validateForm();
				console.log("onSubmit sart case 2", step)
				setStep(3);
				break;
			case 3: setStep(4);
				console.log("onSubmit sart case 3", step)
				break;
			default:
				return null;
		}
		onSubmitProps.setSubmitting(false);
	};

	function resetClosingForm(reset) {
		setActive(false);
		reset.resetForm();
		setStep(1);
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema(step)}>
			{(formik) => {
				// console.log('fotmik', formik)
				return (
					<Form>
						<div className={classNames('cart', { cart_visible: active === true })} onClick={() => setActive(false)}>
							<div className="mask"></div>
							<div data-test-id="cart" className="shoppingcart" onClick={(e) => e.stopPropagation()}>
								<div className="shoppingcart__header">
									<div className="shopping-container">
										<div className="shoppingcart__top">
											<div className="shoppingcart-top__title">Shopping cart</div>
											<div className="shoppingcart-top__close" onClick={() => resetClosingForm(formik)}>
												<img src={imgExit} alt="imgCard" />
											</div>
										</div>
									</div>
								</div>
								<div className="shopping-container">
									<div className={classNames('shoppingcart__info', { disable: totalItem === 0 })}>
										<div className={classNames('shopping-info__item', { active: step === 1 })}>Item in Cart </div>
										<span> / </span>
										<div className={classNames('shopping-info__item', { active: step === 2 })}> Delivery info</div>
										<span> / </span>
										<div className={classNames('shopping-info__item', { active: step === 3 })}> Payment</div>
									</div>
								</div>

								<div className={classNames('shoppingcart-empty', { notempty: totalItem })}>
									{currentStep(step, formik)}
								</div>
								<div className={classNames('shoppingcart__fotter', { disable: totalItem === 0 })}>
									<div className="shopping-container">
										{step === 1 && <TotalPrice totalPrice={totalPrice} />}
										{step === 1 && (
											<DeliveryPayButton
												type={'button'}
												title={'Further'}
												step={2}
												setStep={setStep}
												isSubmitting={false}
												isValid={true}
												dirty={true}
											/>
										)}
										<ViewCartButton active={deliveryInfo} step={step} setStep={setStep} />
									</div>
								</div>
								<div className={classNames('shoppingcart-empty', { empty: totalItem === 0 })}>
									<div className="shoppingcart__main">
										<div className="shopping-container">
											<div className="shopping__sorry">
												Sorry, <br />
												your cart <br />
												is empty
											</div>
										</div>
									</div>
									<div className="shoppingcart__fotter">
										<div className="shopping-container">
											<div onClick={() => setActive(false)} className="shoppingcart-button__further">
												Back to shopping
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

export default connect(mapStateToProps)(Cart);
