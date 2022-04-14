function DeliveryPayButton(props) {
	return (
		<button
			type="submit"
			className="shoppingcart-button__further"
			disabled={props.isSubmitting || !props.isValid || !props.dirty
			}
		>
			{props.title}
		</button >
	);
}

export default DeliveryPayButton;
