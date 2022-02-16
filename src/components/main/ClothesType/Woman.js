import { Link } from 'react-router-dom';
import '../Part3/css/Part3.css';
import CardItem from '../../CardItem/CardItem';
import cardwoman01 from '../Part3/img/woman/01.jpg';
import cardwoman02 from '../Part3/img/woman/02.jpg';
import cardwoman03 from '../Part3/img/woman/03.jpg';
import cardwoman04 from '../Part3/img/woman/04.jpg';
import cardwoman05 from '../Part3/img/woman/05.jpg';
import cardwoman06 from '../Part3/img/woman/06.jpg';
import cardwoman07 from '../Part3/img/woman/07.jpg';
import cardwoman08 from '../Part3/img/woman/08.jpg';

const cardWoman = [
	{
		id: 1,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman01,
	},
	{
		id: 2,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman02,
	},
	{
		id: 3,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman03,
	},
	{
		id: 4,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman04,
	},
	{
		id: 5,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman05,
	},
	{
		id: 6,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman06,
	},
	{
		id: 7,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman07,
	},
	{
		id: 8,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman08,
	},
]
const navMenuLink = [
	{ link: "NEW ARRIVALS", },
	{ link: "SPECIAL" },
	{ link: "BESTSELLERS" },
	{ link: "MOSTVIEWED" },
	{ link: "FEATURED PRODUCTS" },
]
function ClothesWoman() {
	return (
		<div className='clothes' data-test-id={`clothes-${ClothesWoman}`}>
			<div className="container">
				<div className="navigate__memu">
					<div className="navigate-menu__columns">
						<div className="navigate-menu__column">
							<Link to='/women' className="navigate-menu-colum__title">WOMEN'S</Link>
						</div>
						<div className="navigate-menu__column">
							<nav className="navigate-menu__list">
								<ul className="navigate-menu__links">
									{navMenuLink.map(item => <li key={item.link}><a className='navigate-menu__link' href="/">{item.link}</a></li>)}
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="parth__clothes">
					<div className="parth3__items">
						{cardWoman.map(item => <CardItem key={item.id} id={item.id} title={item.title} cost={item.cost} imgCard={item.imgCard} />)}
					</div>
					<button className="parth3__button">
						SEE ALL
					</button>
				</div>
			</div>
		</div>
	);
}

export default ClothesWoman;