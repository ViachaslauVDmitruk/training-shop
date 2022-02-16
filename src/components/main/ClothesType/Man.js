import { Link, } from 'react-router-dom';
import '../Part3/css/Part3.css'
import CardItem from '../../CardItem/CardItem';
import { getItemsByType } from '../../../clothes';

const navMenuLink = [
	{ link: "NEW ARRIVALS" },
	{ link: "SPECIAL" },
	{ link: "BESTSELLERS" },
	{ link: "MOSTVIEWED" },
	{ link: "FEATURED PRODUCTS" },
]

function ClothesMan(props) {
	let related = getItemsByType('men');

	return (
		<div className='clothes' data-test-id={`clothes-${'men'}`}>
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
						{related.map(item => <CardItem productType={'men'} key={item.id} id={item.id} title={item.title} cost={item.cost} imgCard={item.imgCard} />)}
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