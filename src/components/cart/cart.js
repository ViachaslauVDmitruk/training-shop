import './css/cart.css';
import imgExit from './img/close.png';
import classNames from 'classnames';
import CartItem from './cartItem';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DeliveryInfo from './deliveryInfo';
import Payment from './payment';
import TotalPrice from './totalPrise';
import DeliveryPayButton from './devileryPayButton';
import { clearCart, sendPaymentData } from '../../redux/Shopping/shopping-actions';
import PaymentResult from './paymentResult';

function Cart({ cart, active, setActive }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItem, setTotalItem] = useState(0);
	const [step, setStep] = useState(1);
	const [isFindStore, setIsFindStore] = useState();
	const dispatch = useDispatch();
	const result = useSelector(state => state.shop.paymentMessage.data);

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
					step={step}
					setStep={setStep}
					isFindStore={isFindStore}
					setIsFindStore={setIsFindStore}
				/>;
			}
			case 3: {
				return <Payment
					formik={props}
					totalPrice={totalPrice}
					step={step}
					setStep={setStep}
				/>;
			}
			case 4: {
				return <PaymentResult
					formik={props}
					step={step}
					setStep={setStep}
					reset={resetClosingForm}
				/>
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
	}, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice, active]);

	const initialValues = {
		deliveryMethod: 'Pickup from post offices',
		phone: '',
		email: '',
		country: 'Беларусь',
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

	const regExMail = /^[_a-z0-9-\\+-][^\s]+(\.[_a-z0-9-]\+)*@[a-z0-9-]+(\.[a-z0-9-]\+)*(\.[a-z]{2,4})$/i;
	const regExPhone = /^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}$/;
	const regExCard = /^[\d\s]+$/;
	const regExCardDate = /^(0\d|1[0-2])\/(([2-9][2-9])|[3-9]\d)$/;
	const regExCVV = /^\d+$/;

	let validSchemaStepTwo = Yup.object().shape({
		phone: Yup.string().matches(regExPhone, 'Неверный номер').required('Поле должно быть заполнено'),
		email: Yup.string()
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

		storeAdress: Yup.string().when('deliveryMethod', {
			is: 'Store pickup',
			then: Yup.string()
				.matches(isFindStore, 'Здесь рыбы нет!')
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

		card: Yup.string().when('paymentMethod', {
			is: 'Visa',
			then: Yup.string()
				.matches(regExCard, 'Некорректный номер')
				.min(19, 'Должно быть 16 цифр')
				.max(19, 'Должно быть 16 цифр')
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		cardDate: Yup.string().when('paymentMethod', {
			is: 'Visa',
			then: Yup.string()
				.matches(regExCardDate, 'Некорректная дата').required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),

		cardCVV: Yup.string().when('paymentMethod', {
			is: 'Visa',
			then: Yup.string()
				.matches(regExCVV, 'Только цифры').required('Поле должно быть заполнено')
				.min(3, 'Минимум 3 цифры')
				.max(4, 'максимум 4 цифры')
				.required('Поле должно быть заполнено'),
			otherwise: Yup.string().transform(x => undefined),
		}),
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

	function resetClosingForm(reset) {
		setActive(false);
		reset.resetForm();
		setStep(1);
		if (result?.message === 'success') {
			dispatch(clearCart());
		}
	}

	const onSubmit = (values, onSubmitProps) => {
		console.log('onSubmitProps', values)
		onSubmitProps.setTouched({
			phone: false,
			email: false,
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
				break;
			case 2:
				setStep(3);
				break;
			case 3:
				dispatch(sendPaymentData(values, cart, totalPrice));
				setStep(4);
				break;
			case 4:
				setStep(5);
				if (result.message === "success") {
					resetClosingForm(onSubmitProps);
					dispatch(clearCart());
				}
				break;
			case 5:
				setStep(3);
				break
			default:
				return null;
		}
		onSubmitProps.setSubmitting(false);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema(step)}>
			{(formik) => {
				// console.log('formik', formik)
				return (
					<Form>
						<div className={classNames('cart', { cart_visible: active === true })}
						//  onClick={() => setActive(false)}
						>
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
									<div className={classNames('shoppingcart__info', { disable: totalItem === 0 || step === 4 })}>
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
