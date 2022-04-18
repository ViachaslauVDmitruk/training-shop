function ViewCartButton({ step, setStep, reset }) {

	return (
		<button
			type='button'
			className="shoppingcart-button__view"
			onClick={() => {
				setStep(step);
			}}>
			View cart
		</button>
	);
}

export default ViewCartButton;