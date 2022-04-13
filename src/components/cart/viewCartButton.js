function ViewCartButton({ step, setStep, type }) {
	return (
		<button type='submit' className="shoppingcart-button__view" onClick={() => setStep(1)}>
			View cart
		</button>
	);
}

export default ViewCartButton;
