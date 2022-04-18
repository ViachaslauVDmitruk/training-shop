function TotalPrice({ totalPrice }) {

	return (
		<div className="shoppingcart__totalprice">
			<div className="shoppingcart-totalprice__text">Total</div>
			<div className="shoppingcart-totalprice__pricetotal">${totalPrice}</div>
		</div>
	);
}

export default TotalPrice;