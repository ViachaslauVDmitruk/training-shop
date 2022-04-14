import { useSelector } from "react-redux";
import DeliveryPayButton from "./devileryPayButton";
import ViewCartButton from "./viewCartButton";


function PaymentResult(props) {
	const result = useSelector(store => store.shop.paymentMessage.data);
	console.log('props result', props.reset)
	return (
		<>
			<div className="shoppingcart__main">
				<div className="shopping-container">
					<div className="shopping__sorry">
						Thank you <br />
						for your order <br />
					</div>
					<div className="shopping-result">
						Information about your order <br />
						will appear in your e-mail.<br />
						<span>Our manager will call you back.</span>
					</div>
				</div>
			</div>
			<div className="shopping-container">
				<button
					type="button"
					className="shoppingcart-button__further"
					onClick={() => props.reset(props.formik)}
				>
					{result?.message === 'success' ? 'Back to shopping' : 'Back to payment'}
				</button >



				{/* <DeliveryPayButton
					isSubmitting={false}
					isValid={true}
					dirty={true}
				/> */}
				<ViewCartButton />
			</div>
		</>
	)
}

export default PaymentResult;