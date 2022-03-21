import imgLoader from './img/loader.gif';
import './css/loader.css';

function Loader() {

	return (
		<div className="loader">
			<img src={imgLoader} alt="loader" />
		</div>
	)
}

export default Loader;