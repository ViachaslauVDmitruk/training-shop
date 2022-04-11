function DeliveryPayButton(props) {
  return (
    <button
      className="shoppingcart-button__further" //  onClick={() => setDeliveryInfo(true)}
      onClick={() => props.setStep(props.step)}
    >
      {props.title}
    </button>
  );
}

export default DeliveryPayButton;
