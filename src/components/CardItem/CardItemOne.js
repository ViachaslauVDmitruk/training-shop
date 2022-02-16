import { Link } from 'react-router-dom';
import '../main/Part3/css/Part3.css'
import starYellow from '../main/Part3/img/icons/starYellow.png';
import starGrey from '../main/Part3/img/icons/starGrey.png';

function CardItemOne(props) {
	return (
		<Link key={props.id} to={`/product/${props.id}`} className="cards-item" data-test-id={`clothes-card-${props.id}`}>
			<div className="parth3-item__img">
				<img src={props.imgCard} alt="imgCard" />
			</div>
			<div className="parth3-item__title">{props.title}</div>
			<div className="parth3-item__box">
				<div className="parth3-item-box__cost">{props.cost}</div>
				<div className="parth3-item-box__grade">
					<img src={starYellow} alt="starYellow" />
					<img src={starYellow} alt="starYellow" />
					<img src={starYellow} alt="starYellow" />
					<img src={starYellow} alt="starYellow" />
					<img src={starGrey} alt="starGray" />
				</div>
			</div>
		</Link>
	)
}
export default CardItemOne;