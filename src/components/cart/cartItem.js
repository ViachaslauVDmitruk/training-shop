import './css/cart.css'
import imgTrash from './img/trash.png';
import imgMinus from './img/minus.png';
import imgPlus from './img/plus.png';
import { useEffect, useState } from 'react';
import { removeFromCart } from '../../redux/Shopping/shopping-actions';
import { connect } from 'react-redux'

function CartItem({ productData, removeFromCart }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItem, setTotalItem] = useState(0);

	useEffect(() => {
		let items = 0;
		let price = 0;
		items += productData.qty;
		price += productData.qty * productData.price;
		setTotalItem(items);
		setTotalPrice(price);
	}, [productData, totalItem, totalPrice, setTotalItem, setTotalPrice])

	return (
		<div className="shoppingcart__item">
			<div className="shoppingcart-item__image">
				<img src={`https://training.cleverland.by/shop${productData.image}`} alt="imgCard" />
			</div>
			<div className="shopping-item__params">
				<div className="shopping-item-params__name">{productData.name}</div>
				<div className="shopping-item-params__colorsize">{productData.color}, {productData.size}</div>
				<div className="shopping-item-params__info">
					<div className="shopping-item-params-info__number">
						<div className="shopping-item-params-info-number__add">
							<img src={imgMinus} alt="imgCard" />
						</div>
						<div className="shopping-item-params-info-number__amount">{totalItem}</div>
						<div className="shopping-item-params-info-number__add">
							<img src={imgPlus} alt="imgCard" />
						</div>
					</div>
					<div className="shopping-item-params-info__price">$ {totalPrice}</div>
					<div onClick={() => removeFromCart(productData.id, productData.color, productData.size)} className="shopping-item-params-info__trash">
						<img src={imgTrash} alt="imgCard" />
					</div>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (id, color, size) => dispatch(removeFromCart(id, color, size))
	}
}

export default connect(null, mapDispatchToProps)(CartItem);