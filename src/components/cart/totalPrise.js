function TotalPrice(props) {
  return (
    <div className="shoppingcart__totalprice">
      <div className="shoppingcart-totalprice__text">Total</div>
      <div className="shoppingcart-totalprice__pricetotal">${props.totalPrice}</div>
    </div>
  );
}

export default TotalPrice;
