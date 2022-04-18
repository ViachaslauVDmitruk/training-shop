import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import classNames from 'classnames';

import DeliveryInfo from './delivery-info';
import Payment from './payment';
import TotalPrice from './total-prise';
import DeliveryPayButton from './devilery-pay-button';
import PaymentResult from './payment-result';
import CartItem from './cart-item';

import { validSchemaStepThree, validSchemaStepTwo } from './valid-schema';
import { clearCart, sendPaymentData } from '../../redux/Shopping/shopping-actions';

import imgExit from './img/close.png';

import './css/cart.css';


function Cart({ cart, active, setActive }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItem, setTotalItem] = useState(0);
	const [step, setStep] = useState(1);
	const [isFindStore, setIsFindStore] = useState();
	const dispatch = useDispatch();
	const result = useSelector(state => state.shop.paymentMessage);

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
					setStep={setStep}
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
		country: '',
		city: '',
		street: '',
		house: '',
		apartment: '',
		postcode: '',
		storeAddress: '',
		check: '',
		paymentMethod: 'Visa',
		cashEmail: '',
		card: '',
		cardDate: '',
		cardCVV: '',
	};

	const validationSchema = (step) => {
		switch (step) {
			case 1:

				return Yup.object().shape({});
			case 2:

				return validSchemaStepTwo(isFindStore);
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

		onSubmitProps.setTouched({
			phone: false,
			email: false,
			country: false,
			city: false,
			street: false,
			house: false,
			apartment: false,
			postcode: false,
			storeAddress: false,
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
				if (result?.message === "success") {
					resetClosingForm(onSubmitProps);
					dispatch(clearCart());
				} else {
					setStep(3);
				}
				break;
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

				return (
					<Form>
						<div className={classNames('cart', { cart_visible: active === true })}>
							<div className="mask" onClick={() => setActive(false)}></div>
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
												title={'Further'}
												formik={formik}
												setStep={setStep}
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
