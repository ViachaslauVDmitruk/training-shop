import './css/cart.css'
// import imgCard from '../sliderproduct/img/01.jpg';
import imgTrash from './img/trash.png';
import imgMinus from './img/minus.png';
import imgPlus from './img/plus.png';

function CartItem({ productData }) {
	console.log(typeof (productData.images));
	return (
		<div className="shoppingcart__item">
			<div className="shoppingcart-item__image">
				<img src={`https://training.cleverland.by/shop${productData.images[0].url}`} alt="imgCard" />
			</div>
			<div className="shopping-item__params">
				<div className="shopping-item-params__name">{productData.name}</div>
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
					<div className="shopping-item-params-info__price">$ {productData.price}</div>
					<div className="shopping-item-params-info__trash">
						<img src={imgTrash} alt="imgCard" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem;