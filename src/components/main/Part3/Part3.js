import './css/Part3.css';
import starYellow from './img/icons/starYellow.png';
import starGrey from './img/icons/starGrey.png';

import cardwoman01 from './img/woman/01.jpg';
import cardwoman02 from './img/woman/02.jpg';
import cardwoman03 from './img/woman/03.jpg';
import cardwoman04 from './img/woman/04.jpg';
import cardwoman05 from './img/woman/05.jpg';
import cardwoman06 from './img/woman/06.jpg';
import cardwoman07 from './img/woman/07.jpg';
import cardwoman08 from './img/woman/08.jpg';

import cardman01 from './img/man/01.jpg';
import cardman02 from './img/man/02.jpg';
import cardman03 from './img/man/03.jpg';
import cardman04 from './img/man/04.jpg';
import cardman05 from './img/man/05.jpg';
import cardman06 from './img/man/06.jpg';
import cardman07 from './img/man/07.jpg';
import cardman08 from './img/man/08.jpg';
import { Link } from 'react-router-dom';

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

const navMenuLink = [
	{ link: "NEW ARRIVALS" },
	{ link: "SPECIAL" },
	{ link: "BESTSELLERS" },
	{ link: "MOSTVIEWED" },
	{ link: "FEATURED PRODUCTS" },
]
function Part3() {
	return (
		<div className="Part3">
			<div className="container">
				<div className="navigate__memu">
					<div className="navigate-menu__columns">
						<div className="navigate-menu__column">
							<div className="navigate-menu-colum__title">WOMEN'S</div>
						</div>
						<div className="navigate-menu__column">
							<nav className="navigate-menu__list">
								<ul className="navigate-menu__links">
									{navMenuLink.map(item => <li ><a className='navigate-menu__link' href="/">{item.link}</a></li>)}
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="parth__clothes">
					<div className="parth3__items">
						{cardWoman.map(item => <div className="parth3-items__item">
							<div className="parth3-item__img">
								<img src={item.imgCard} alt="imgCard" />
							</div>
							<div className="parth3-item__title">{item.title}</div>
							<div className="parth3-item__box">
								<div className="parth3-item-box__cost">{item.cost}</div>
								<div className="parth3-item-box__grade">
									<img src={starYellow} alt="" />
									<img src={starYellow} alt="" />
									<img src={starYellow} alt="" />
									<img src={starYellow} alt="" />
									<img src={starGrey} alt="" />
								</div>
							</div>
						</div>)}

					</div>
					<button className="parth3__button">
						SEE ALL
					</button>
				</div>
				<div className="navigate__memu">
					<div className="navigate-menu__columns">
						<div className="navigate-menu__column">
							<div className="navigate-menu-colum__title">MEN'S</div>
						</div>
						<div className="navigate-menu__column">
							<nav className="navigate-menu__list">
								<ul className="navigate-menu__links">
									{navMenuLink.map(item => <li ><a className='navigate-menu__link' href="/">{item.link}</a></li>)}
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="parth__clothes">
					<div className="parth3__items">
						{cardMan.map(item => <div className="parth3-items__item">
							<div className="parth3-item__img">
								<img src={item.imgCard} alt="imgCard" />
							</div>
							<div className="parth3-item__title">{item.title}</div>
							<div className="parth3-item__box">
								<div className="parth3-item-box__cost">{item.cost}</div>
								<div className="parth3-item-box__grade">
									<img src={starYellow} alt="" />
									<img src={starYellow} alt="" />
									<img src={starYellow} alt="" />
									<img src={starYellow} alt="" />
									<img src={starGrey} alt="" />
								</div>
							</div>
						</div>)}

					</div>
					<button className="parth3__button">
						SEE ALL
					</button>
				</div>
			</div>
		</div>
	);
}

export default Part3;