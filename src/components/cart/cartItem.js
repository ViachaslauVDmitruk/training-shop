import './css/cart.css'
import imgTrash from './img/trash.png';
import imgMinus from './img/minus.png';
import imgPlus from './img/plus.png';
import { useState } from 'react';
import { adjustQty, removeFromCart } from '../../redux/Shopping/shopping-actions';
import { connect } from 'react-redux'

function CartItem({ productData, removeFromCart, adjustQty }) {
	const [totalPrice, setTotalPrice] = useState(productData.price);
	const [totalItem, setTotalItem] = useState(1);
	let items = 1;
	let price = 0;

	function itemPlus(count) {
		items = 1 + count
		price = (Math.round((items * productData.price) * 100)) / 100;
		setTotalPrice(price);
		setTotalItem(items);
		adjustQty(productData.id, productData.color, productData.size, items)
	}
	function itemMinus(count) {
		if (count === 1) {
			return
		};
		items = count - 1
		price = (Math.round((items * productData.price) * 100)) / 100;
		setTotalPrice(price);
		setTotalItem(items);
		adjustQty(productData.id, productData.color, productData.size, items)
	};

	return (
		<div data-test-id='cart-card' className="shoppingcart__item">
			<div className="shoppingcart-item__image">
				<img src={`https://training.cleverland.by/shop${productData.image}`} alt="imgCard" />
			</div>
			<div className="shopping-item__params">
				<div className="shopping-item-params__name">{productData.name}</div>
				<div className="shopping-item-params__colorsize">{productData.color}, {productData.size}</div>
				<div className="shopping-item-params__info">
					<div className="shopping-item-params-info__number">
						<div data-test-id='minus-product' className="shopping-item-params-info-number__add" onClick={() => itemMinus(totalItem)}>
							<img src={imgMinus} alt="imgCard" />
						</div>
						<div className="shopping-item-params-info-number__amount">{totalItem}</div>
						<div data-test-id='plus-product' className="shopping-item-params-info-number__add" onClick={() => itemPlus(totalItem)}>
							<img src={imgPlus} alt="imgCard" />
						</div>
					</div>
					<div className="shopping-item-params-info__price">$ {totalPrice}</div>
					<div data-test-id='remove-product' onClick={() => removeFromCart(productData.id, productData.color, productData.size)} className="shopping-item-params-info__trash">
						<img src={imgTrash} alt="imgCard" />
					</div>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (id, color, size) => dispatch(removeFromCart(id, color, size)),
		adjustQty: (id, color, size, qty) => dispatch(adjustQty(id, color, size, qty))
	}
}

export default connect(null, mapDispatchToProps)(CartItem);