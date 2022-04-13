function DeliveryPayButton(props) {
	return (
		<button
			// type="submit"
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
