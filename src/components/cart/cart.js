import './css/cart.css'
import imgExit from './img/close.png';
import classNames from 'classnames';
import CartItem from './cartItem';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Cart({ cart, active, setActive }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItem, setTotalItem] = useState(0);

	useEffect(() => {
		let items = 0;
		let price = 0;
		cart.forEach(item => {
			items += item.qty;
			price = Math.round(((Math.round((item.qty * item.price) * 100)) / 100 + price) * 100) / 100;
		})
		setTotalItem(items);
		setTotalPrice(price);
	}, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice]);

	return (
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
					<div className={classNames("shoppingcart__info", { disable: totalItem === 0 })} >Item in Cart</div>
				</div>
				<div className={classNames("shoppingcart-empty", { notempty: totalItem })}>
					<div className='shoppingcart__main'>
						<div className="shopping-container">
							{cart.map(item => (<CartItem key={item.id + item.color + item.size} productData={item} />))}
						</div>
					</div>
				</div>
				<div className={classNames("shoppingcart__fotter", { disable: totalItem === 0 })} >
					<div className="shopping-container">
						<div className="shoppingcart__totalprice">
							<div className="shoppingcart-totalprice__text">Total</div>
							<div className="shoppingcart-totalprice__pricetotal">${totalPrice}</div>
						</div>
						<div className="shoppingcart-button__further">Further</div>
						<div className="shoppingcart-button__view" onClick={() => setActive(false)}>View cart</div>
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
	);
}

const mapStateToProps = state => {

	return {
		cart: state.shop.cart,
	}
}

export default connect(mapStateToProps)(Cart);