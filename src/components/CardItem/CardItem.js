import { Link } from 'react-router-dom';
import '../main/Part3/css/Part3.css'
import starYellow from '../main/Part3/img/icons/starYellow.png';
import starGrey from '../main/Part3/img/icons/starGrey.png';
import classNames from 'classnames';
import Rating from '../rating/rating';

function CardItem(props) {
	let isDiscount;
	function discountMode() {
		if (props.discount) {
			isDiscount = true;
		} else {
			isDiscount = false;
		}
	};

	return (
		<Link to={`/${props.productType}/${props.id}`} className='cards-item' data-test-id={`clothes-card-${props.productType}`}>
			<div className="parth3-item__image">
				<img src={`https://training.cleverland.by/shop${props.imgCard}`} alt="imgCard" />
				<div className={classNames("discount-block", discountMode(), { visible: isDiscount },)}>{props.discount}</div>
			</div>
			<div className="parth3-item__title">{props.name}</div>
			<div className="parth3-item__box">
				<div className="parth3-item-box__cost">{`${'$'} ${props.cost}`}</div>
				<div className="parth3-item-box__grade">
					{/* <img src={starYellow} alt="starYellow" />
					<img src={starYellow} alt="starYellow" />
					<img src={starYellow} alt="starYellow" />
					<img src={starYellow} alt="starYellow" />
					<img src={starGrey} alt="starGray" /> */}
					<Rating ratingProps={props.rating} />
				</div>
			</div>
		</Link>
	)
}
export default CardItem;