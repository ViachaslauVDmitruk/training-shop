import { useSelector } from "react-redux";
import DeliveryPayButton from "./devileryPayButton";
import ViewCartButton from "./viewCartButton";


function PaymentResult(props) {
	const result = useSelector(store => store.shop.paymentMessage.data);
	const textError = (result) => {
		switch (result) {
			case 'request-error':
				return 'request-error'

			case 'underfunded':
				return 'There are not enough funds \n to pay for the order'
			case 'bank-error':
				return 'Failed to pay for the order, the problem is on the side of the bank'
			case 'timeout':
				return 'timeout'
			default:
				return null;
		}
	}

	return (
		<>
			<div className="shoppingcart__main">
				{(result?.message === 'success') && <div className="shopping-container">
					<div className="shopping__sorry">
						Thank you <br />
						for your order <br />
					</div>
					<div className="shopping-result">
						Information about your order <br />
						will appear in your e-mail.<br />
						<span>Our manager will call you back.</span>
					</div>
				</div>}
				{(result?.message !== 'success') && <div className="shopping-container">
					<div className="shopping__sorry">
						Sorry, <br />
						your payment <br />
						has not been <br />
						processed.
					</div>
					<div className="shopping-result">
						{textError}
					</div>
				</div>}
			</div>
			<div className="shopping-container">
				<button
					type="submit"
					className="shoppingcart-button__further"
				// onClick={() => props.reset(props.formik)}
				>
					{result?.message === 'success' ? 'Back to shopping' : 'Back to payment'}
				</button >



				{/* <DeliveryPayButton
					isSubmitting={false}
					isValid={true}
					dirty={true}
				/> */}
				{(result?.message !== 'success') && <ViewCartButton />}
			</div>
		</>
	)
}

export default PaymentResult;