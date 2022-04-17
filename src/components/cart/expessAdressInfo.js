import { Field, ErrorMessage } from 'formik';
import TextErrorDelivery from './errorDelivery';

function ExpressAdressInfo() {
	return (
		<div className="info">
			<Field
				autoComplete="off"
				type="text"
				id="adress"
				name="country"
				className="choose-info__input"
				placeholder="Country"
			/>
			<ErrorMessage name="country" component={TextErrorDelivery} />
		</div>
	)
}

export default ExpressAdressInfo;