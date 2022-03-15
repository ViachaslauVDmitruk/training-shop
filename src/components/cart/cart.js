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
			price += item.qty * item.price;
		})
		setTotalItem(items);
		setTotalPrice(price);
	}, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice])

	return (
		<div className={classNames('cart', { "cart_visible": active === true })} onClick={() => setActive(false)}>
			<div className="mask"></div>
			<div className="shoppingcart" onClick={e => e.stopPropagation()}>
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
				<div className='shoppingcart__main'>
					<div className="shopping-container">
						<div className="shoppingcart__info">Item in Cart</div>
						<div className="shoppingcart__scroll">
							{cart.map(item => (<CartItem key={item.id + item.color + item.size} productData={item} />))}
						</div>
					</div>
				</div>
				<div className="shoppingcart__fotter">
					<div className="shopping-container">
						<div className="shoppingcart__totalprice">
							<div className="shoppingcart-totalprice__text">Total</div>
							<div className="shoppingcart-totalprice__pricetotal">${totalPrice}</div>
						</div>
						<div className="shoppingcart-button__further">Further</div>
						<div className="shoppingcart-button__view">View cart</div>
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