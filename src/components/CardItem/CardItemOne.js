import { Link, HashRouter as Router, Route } from 'react-router-dom';
import '../main/Part3/css/Part3.css'
import starYellow from '../main/Part3/img/icons/starYellow.png';
import starGrey from '../main/Part3/img/icons/starGrey.png';
import ProductPage from '../../pages/ProductPage/ProductPage';

function CardItemOne(props) {
	return (
		<Router>
			<Link to={`/${ProductPage}/${props.id}`} className="cards-item" data-test-id={`clothes-card-${props.id}`}>
				<div className="parth3-item__img">
					<img src={props.imgCard} alt="imgCard" />
				</div>
				<div className="parth3-item__title">{props.title}</div>
				<div className="parth3-item__box">
					<dvi className="parth3-item-box__cost">{props.cost}</dvi>
					<div className="parth3-item-box__grade">
						<img src={starYellow} alt="starYellow" />
						<img src={starYellow} alt="starYellow" />
						<img src={starYellow} alt="starYellow" />
						<img src={starYellow} alt="starYellow" />
						<img src={starGrey} alt="starGray" />
					</div>
				</div>
			</Link>
		</Router>
	)
}
export default CardItemOne;