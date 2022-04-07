import './css/errorDelivery.css';

function TextErrorDelivery(props) {
	return (
		<div className='error-delivary'>
			{props.children}
		</div>
	)
}

export default TextErrorDelivery;