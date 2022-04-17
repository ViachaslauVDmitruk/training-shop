function DeliveryPayButton({ formik, title }) {
	return (
		<button
			type="submit"
			className="shoppingcart-button__further"
			onClick={() =>
				(formik.isValid ? formik.values.check : formik.values.check = '')
			}
		>
			{title}
		</button >
	);
}

export default DeliveryPayButton;
