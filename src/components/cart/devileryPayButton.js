function DeliveryPayButton(props) {
  return (
    <button
      className="shoppingcart-button__further"
      type={props.type}
      disabled={props.isSubmitting || !props.isValid || !props.dirty}
      onClick={() => props.setStep(props.step)}
    >
      {props.title}
    </button>
  );
}

export default DeliveryPayButton;
