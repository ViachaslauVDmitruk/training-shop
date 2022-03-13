import './css/cart.css'
import imgCard from '../sliderproduct/img/01.jpg';
import imgTrash from './img/trash.png';
import imgMinus from './img/minus.png';
import imgPlus from './img/plus.png';
import imgExit from './img/close.png';
import classNames from 'classnames';

function Cart(active, setActive) {

	return (
		<div className={classNames('cart', { "cart_visible": active.active === true })} onClick={() => active.setActive(!active.active)}>
			<div className="mask"></div>
			<div className="shoppingcart">
				<div className="shoppingcart__header">
					<div className="shopping-container">
						<div className='shoppingcart__top'>
							<div className="shoppingcart-top__title">
								Shopping cart
							</div>
							<div className="shoppingcart-top__close">
								<img src={imgExit} alt="imgCard" />
							</div>
						</div>
					</div>
				</div>
				<div className='shoppingcart__main'>
					<div className="shopping-container">
						<div className="shoppingcart__info">Item in Cart</div>
						<div className="shoppingcart__item">
							<div className="shoppingcart-item__image">
								<img src={imgCard} alt="imgCard" />
							</div>
							<div className="shopping-item__params">
								<div className="shopping-item-params__name">Women's tracksuit Q109</div>
								<div className="shopping-item-params__colorsize">Blue, S</div>
								<div className="shopping-item-params__info">
									<div className="shopping-item-params-info__number">
										<div className="shopping-item-params-info-number__add">
											<img src={imgMinus} alt="imgCard" />
										</div>
										<div className="shopping-item-params-info-number__amount">1</div>
										<div className="shopping-item-params-info-number__add">
											<img src={imgPlus} alt="imgCard" />
										</div>
									</div>
									<div className="shopping-item-params-info__price">$333</div>
									<div className="shopping-item-params-info__trash">
										<img src={imgTrash} alt="imgCard" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shoppingcart__fotter">
					<div className="shopping-container">
						<div className="shoppingcart__totalprice">
							<div className="shoppingcart-totalprice__text">Total</div>
							<div className="shoppingcart-totalprice__pricetotal">$333</div>
						</div>
						<div className="shoppingcart-button__further">Further</div>
						<div className="shoppingcart-button__view">View cart</div>
					</div>
				</div>
			</div>
		</div >
	);
}
export default Cart;