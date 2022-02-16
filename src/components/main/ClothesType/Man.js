import { Link } from 'react-router-dom';
import '../Part3/css/Part3.css'
import CardItem from '../../CardItem/CardItem';
import cardman01 from '../Part3/img/man/01.jpg';
import cardman02 from '../Part3/img/man/02.jpg';
import cardman03 from '../Part3/img/man/03.jpg';
import cardman04 from '../Part3/img/man/04.jpg';
import cardman05 from '../Part3/img/man/05.jpg';
import cardman06 from '../Part3/img/man/06.jpg';
import cardman07 from '../Part3/img/man/07.jpg';
import cardman08 from '../Part3/img/man/08.jpg';

const navMenuLink = [
	{ link: "NEW ARRIVALS" },
	{ link: "SPECIAL" },
	{ link: "BESTSELLERS" },
	{ link: "MOSTVIEWED" },
	{ link: "FEATURED PRODUCTS" },
]
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
function ClothesMan() {
	return (
		<div className='clothes' data-test-id={`clothes-${ClothesMan}`}>
			<div className="container">
				<div className="navigate__memu">
					<div className="navigate-menu__columns">
						<div className="navigate-menu__column">
							<Link to='/men' className="navigate-menu-colum__title">MEN'S</Link>
						</div>
						<div className="navigate-menu__column">
							<nav className="navigate-menu__list">
								<ul className="navigate-menu__links">
									{navMenuLink.map(item => <li key={item.link} ><a className='navigate-menu__link' href="/">{item.link}</a></li>)}
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="parth__clothes">
					<div className="parth3__items">
						{cardMan.map(item => <CardItem key={item.id} id={item.id} title={item.title} cost={item.cost} imgCard={item.imgCard} />)}
					</div>
					<button className="parth3__button">
						SEE ALL
					</button>
				</div>
			</div>
		</div>
	);
}

export default ClothesMan;