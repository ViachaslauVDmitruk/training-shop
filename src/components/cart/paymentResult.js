import { useSelector } from "react-redux";
import DeliveryPayButton from "./devileryPayButton";

function PaymentResult(props) {
	const result = useSelector(store => store.shop.paymentMessage.data);
	const textError = (result) => {
		switch (result) {
			case 'request-error':

				{ return <div>'request-error'</div>; }
			case 'underfunded':

				{ return <div>'There are not enough funds \n to pay for the order'</div>; }
			case 'bank-error':

				{ return <div>'Failed to pay for the order, the problem is on the side of the bank'</div>; }
			case 'timeout':

				{ return <div>'timeout'</div>; }
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
						{textError()}
					</div>
				</div>}
			</div>
			<div className="shopping-container">
				<DeliveryPayButton title={result?.message === 'success' ? 'Back to shopping' : 'Back to payment'} formik={props.formik} />
				{(result?.message !== 'success') &&
					<button
						type='button' className="shoppingcart-button__view" onClick={() => {
							props.setStep(1);
							props.formik.resetForm();
						}
						}>
						View cart
					</button>
				}
			</div>
		</>
	)
}

export default PaymentResult;