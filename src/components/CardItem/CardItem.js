import { Link } from 'react-router-dom';
import '../main/Part3/css/Part3.css'
import classNames from 'classnames';
import Rating from '../rating/rating';

function CardItem(props) {
	let isDiscount;
	let newCost = null;
	function discountMode() {
		if (props.discount) {
			isDiscount = true;
			newCost = props.cost - (Math.round(props.cost * (parseInt(props.discount) / 100)) * 100) / 100;
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
				<div className='parth3-item-box__cost-discount'>
					<div className="parth3-item-box__cost">{`${'$'} ${props.cost}`}</div>
					<div className={classNames("parth3-item-box__discount", { visible: isDiscount })} >$ {newCost}</div>
				</div>
				<div className="parth3-item-box__grade">
					<Rating ratingProps={props.rating} />
				</div>
			</div>
		</Link>
	)
}
export default CardItem;