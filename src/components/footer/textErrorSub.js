import './css/textErrorSub.css';

function TextErrorSub(props) {
	return (
		<div className='error-form-sub'>
			{props.children}
		</div>
	)
}

export default TextErrorSub;