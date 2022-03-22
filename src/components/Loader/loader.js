import imgLoader from './img/loader.gif';
import './css/loader.css';

function Loader() {

	return (
		<div data-test-id='loader' className="loader">
			<img src={imgLoader} alt="loader" />
		</div>
	)
}

export default Loader;