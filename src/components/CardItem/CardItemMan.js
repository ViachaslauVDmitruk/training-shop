import { Link, HashRouter as Router, Route } from 'react-router-dom';
import '../main/Part3/css/Part3.css'
import starYellow from '../main/Part3/img/icons/starYellow.png';
import starGrey from '../main/Part3/img/icons/starGrey.png';
import cardman01 from '../main/Part3/img/man/01.jpg';
import cardman02 from '../main/Part3/img/man/02.jpg';
import cardman03 from '../main/Part3/img/man/03.jpg';
import cardman04 from '../main/Part3/img/man/04.jpg';
import cardman05 from '../main/Part3/img/man/05.jpg';
import cardman06 from '../main/Part3/img/man/06.jpg';
import cardman07 from '../main/Part3/img/man/07.jpg';
import cardman08 from '../main/Part3/img/man/08.jpg';
import ClothesMan from '../main/ClothesType/Man';

const cardMan = [
	{
		id: 1,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman01,
	},
	{
		id: 2,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman02,
	},
	{
		id: 3,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman03,
	},
	{
		id: 4,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman04,
	},
	{
		id: 5,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman05,
	},
	{
		id: 6,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman06,
	},
	{
		id: 7,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman07,
	},
	{
		id: 8,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardman08,
	},
]

function CardItemMan() {
	return (
		<Router>
			{cardMan.map(item => <Link to={`/${ClothesMan}/${item.id}`} className="cards-item" data-test-id={`clothes-card-${ClothesMan}`}>
				<div className="parth3-item__img">
					<img src={item.imgCard} alt="" />
				</div>
				<div className="parth3-item__title">{item.title}</div>
				<div className="parth3-item__box">
					<dvi className="parth3-item-box__cost">{item.cost}</dvi>
					<div className="parth3-item-box__grade">
						<img src={starYellow} alt="" />
						<img src={starYellow} alt="" />
						<img src={starYellow} alt="" />
						<img src={starYellow} alt="" />
						<img src={starGrey} alt="" />
					</div>
				</div>
			</Link>)}
		</Router>
	)
}

export default CardItemMan;