import './css/cart.css'
import imgExit from './img/close.png';
import classNames from 'classnames';
import CartItem from './cartItem';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DeliveryInfo from './deliveryInfo';
import Payment from './payment';

function Cart({ cart, active, setActive }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItem, setTotalItem] = useState(0);
	const [deliveryInfo, setDeliveryInfo] = useState(false);

	useEffect(() => {
		let items = 0;
		let price = 0;
		cart.forEach(item => {
			items += item.qty;
			price = Math.round(((Math.round((item.qty * item.price) * 100)) / 100 + price) * 100) / 100;
		})
		setTotalItem(items);
		setTotalPrice(price);
		if (!active) {
			setDeliveryInfo(false);
		}
	}, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice, active]);


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
		paymentMethod: '',
		cashEmail: '',
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
		phone: Yup.string().matches(/^(\+375|80)\s\((29|25|44|33)\)\s[0-9]{3}[0-9]{2}[0-9]{2}$/, 'Неверный номер').required('Поле должно быть заполнено'),
		mail: Yup.string()
			.email('Incorrect email format')
			.matches(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i, 'Incorrect characters')
			.required('Поле должно быть заполнено'),
		country: Yup.string().required('Поле должно быть заполнено'),
		city: Yup.string().required('Поле должно быть заполнено'),
		street: Yup.string().required('Поле должно быть заполнено'),
		house: Yup.string().required('Поле должно быть заполнено'),
		postcode: Yup.string().required('Поле должно быть заполнено'),
		check: Yup.string().required('Вы должны согласиться на обработку личной информации')
	});



	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>

			{formik => {
				console.log('values', formik.values)
				return (
					<Form>
						<div className={classNames('cart', { "cart_visible": active === true })} onClick={() => setActive(false)}>
							<div className="mask"></div>
							<div data-test-id='cart' className="shoppingcart" onClick={e => e.stopPropagation()}>
								<div className="shoppingcart__header">
									<div className="shopping-container">
										<div className='shoppingcart__top'>
											<div className="shoppingcart-top__title">
												Shopping cart
											</div>
											<div className="shoppingcart-top__close" onClick={() => setActive(false)}>
												<img src={imgExit} alt="imgCard" />
											</div>
										</div>
									</div>
								</div>
								<div className="shopping-container">
									<div className={classNames("shoppingcart__info", { disable: totalItem === 0 })} >
										<div className={classNames('shopping-info__item', { active: !deliveryInfo })}>Item in Cart </div>
										<span> / </span>
										<div className={classNames('shopping-info__item', { active: deliveryInfo })}> Delivery info</div>
										<span> / </span>
										<div className='shopping-info__item'> Payment</div>
									</div>
								</div>
								{!deliveryInfo ? <div className={classNames("shoppingcart-empty", { notempty: totalItem })}>
									<div className='shoppingcart__main'>
										<div className="shopping-container">
											{cart.map(item => (<CartItem key={item.id + item.color + item.size} productData={item} />))}
										</div>
									</div>
								</div> : null}
								{deliveryInfo ? <DeliveryInfo formik={formik} /> : null}
								{/* {deliveryInfo ? <Payment formik={formik} /> : null} */}
								<div className={classNames("shoppingcart__fotter", { disable: totalItem === 0 })} >
									<div className="shopping-container">
										<div className="shoppingcart__totalprice">
											<div className="shoppingcart-totalprice__text">Total</div>
											<div className="shoppingcart-totalprice__pricetotal">${totalPrice}</div>
										</div>
										{!deliveryInfo ? <div className="shoppingcart-button__further" onClick={() => setDeliveryInfo(true)}>Further</div> : null}
										{deliveryInfo ? <button
											type="submit"
											className="shoppingcart-button__further" >
											Further
										</button> : null}
										<div className="shoppingcart-button__view" onClick={() => setDeliveryInfo(false)}>View cart</div>
									</div>
								</div>
								<div className={classNames("shoppingcart-empty", { empty: totalItem === 0 })}>
									<div className='shoppingcart__main'>
										<div className="shopping-container">
											<div className='shopping__sorry'>
												Sorry, <br />your cart <br />is empty
											</div>
										</div>
									</div>
									<div className="shoppingcart__fotter">
										<div className="shopping-container">
											<div onClick={() => setActive(false)} className="shoppingcart-button__further">Back to shopping</div>
										</div>
									</div>
								</div>
							</div>
						</div >
					</Form>
				)
			}}
		</Formik>
	);
}

const mapStateToProps = state => {

	return {
		cart: state.shop.cart,
	}
}

export default connect(mapStateToProps)(Cart);