import '../pages/Categories/css/Categories.css';
import './main/Part3/css/Part3.css';
import Header from "./Header/Header";
import Footer from './footer/footer';
import filter from '../pages/img/filter.png';
import viewlist from '../pages/img/viewlist.png';
import viewgrid from '../pages/img/viewgrid.png';
import share from '../pages/img/share.png';
import arrowdown from '../pages/img/arrowdown.png';
import arrowblack from '../pages/img/arrowblack.png'
import { getItemsByType } from '../clothes';
import { useParams } from 'react-router-dom';
import CardItem from './CardItem/CardItem';

function Clothes() {
	let { type } = useParams();
	let items = getItemsByType(type);

	return (
		<div className='clothes' data-test-id={`clothes-${type}`}>
			<div className="wrapper">
				<Header />
				<div className="main">
					<div className="categories__top-block">
						<div className="container">
							<div className="categories-top-block__links">
								<div className="link-home">
									<div className="link-home__title">Home </div>
									<div className="link-home__image">
										<img src={arrowblack} alt="arrowblack" />
									</div>
									<div className="link-home__categoties">{type}</div>
								</div>
								<div className="link-share__items">
									<div className="link-share-item__image">
										<img src={share} alt="share" />
									</div>
									<div className="link-share-item__title">Share</div>
								</div>
							</div>
							<div className="categories-top-block__title">{type}</div>
						</div>
					</div>
					<div className="filter-block">
						<div className="container">
							<div className="filter-block-items">
								<div className="filter-item-filter">
									<div className="filter-item__image">
										<img src={filter} alt="filter" />
									</div>
									<div className="filter-item__title">Filter</div>
								</div>
								<div className="filter-item__view">
									<div className="fiter-item-view__image">
										<img src={viewlist} alt="viewlist" />
									</div>
									<div className="fiter-item-view__image">
										<img src={viewgrid} alt="viewgrid" />
									</div>
								</div>
								<div className="filter-item__select">
									<div className="filter-item-select__title">BESTSELLERS</div>
									<div className="filter-item-select__image">
										<img src={arrowdown} alt="arrowdown" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="card-area">
							<div className="card-grid">
								{items.map(item => <CardItem productType={type} key={item.id} id={item.id} title={item.title} cost={item.cost} imgCard={item.imgCard} />)}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
export default Clothes;