import { Link, HashRouter as Router, Route } from 'react-router-dom';
import '../Part3/css/Part3.css'
import starYellow from '../Part3/img/icons/starYellow.png';
import starGrey from '../Part3/img/icons/starGrey.png';
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
	{ link: "NEW ARRIVALS" },
	{ link: "SPECIAL" },
	{ link: "BESTSELLERS" },
	{ link: "MOSTVIEWED" },
	{ link: "FEATURED PRODUCTS" },
]
function ClothesWoman() {
	return (
		<Router>
			<div className='clothes' data-test-id={`clothes-${ClothesWoman}`}>
				<div className="container">
					<div className="navigate__memu">
						<div className="navigate-menu__columns">
							<div className="navigate-menu__column">
								<Link to={`/`} className="navigate-menu-colum__title">WOMEN'S</Link>
							</div>
							<div className="navigate-menu__column">
								<nav className="navigate-menu__list">
									<ul className="navigate-menu__links">
										{navMenuLink.map(item => <li ><a className='navigate-menu__link' href="#">{item.link}</a></li>)}
									</ul>
								</nav>
							</div>
						</div>
					</div>
					<div className="parth__clothes">
						<div className="parth3__items">
							{cardWoman.map(item => <Link to={`/${ClothesWoman}/${item.id}`} className="cards-item" data-test-id={`clothes-card-${ClothesWoman}`}>
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
						</div>
						<button className="parth3__button">
							SEE ALL
						</button>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default ClothesWoman;