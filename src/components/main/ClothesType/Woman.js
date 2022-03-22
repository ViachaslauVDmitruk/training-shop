import { Link } from 'react-router-dom';
import '../Part3/css/Part3.css';
// import { getItemsByType } from '../../../products';
import CardItem from '../../CardItem/CardItem';
import { MAIN_CLOTHES_BLOCK_MENU } from '../../../particular';
import { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'


const particularModeSelector = createSelector(
	(state) => {
		return state.shop.products;
	},
	(_, particular) => particular,
	(products, particular2) => {
		let newProduct = products ? (products['women'] || []).filter(item => item.particulars[particular2] === true) : [];
		console.log('newProduct', newProduct);

		return newProduct;
	}
);


// let particularMode = createSelector((store) => store.shop.products['woman']);
// console.log('particularMode', particularMode)


function ClothesWoman() {
	let [particular, setParticular] = useState(MAIN_CLOTHES_BLOCK_MENU[0].particularName);
	const particularMode = useSelector((state) => particularModeSelector(state, particular));
	console.log('particularMode', particularMode);

	return (
		<div className='clothes' data-test-id={`clothes-${'women'}`}>
			<div className="container">
				<div className="navigate__memu">
					<div className="navigate-menu__columns">
						<div className="navigate-menu__column">
							<Link to='/women' className="navigate-menu-colum__title">WOMEN'S</Link>
						</div>
						<div className="navigate-menu__column">
							<nav className="navigate-menu__list">
								<ul className="navigate-menu__links">
									{MAIN_CLOTHES_BLOCK_MENU.map(item => <li key={item.particularName} data-test-id={`clothes-women-${item.particularName}`} onClick={() => setParticular(item.particularName)} > <div className={classNames('navigate-menu__link', { selected: item.particularName === particular })} >{item.name}</div></li>)}
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="parth__clothes">
					<div className="parth3__items">
						{(particularMode || []).map(item => <CardItem productType={'women'} key={item.id} id={item.id} name={item.name} cost={item.price} imgCard={item.images[0].url} discount={item.discount} rating={item.rating} />)}
					</div>
					<Link to='/women' className="parth3__button">
						SEE ALL
					</Link>
				</div>
			</div>
		</div >
	);
}

export default ClothesWoman;