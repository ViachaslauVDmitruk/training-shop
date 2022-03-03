import '../pages/Categories/css/Clothes.css';
import './main/Part3/css/Part3.css';
import Header from "./Header/Header";
import Footer from './footer/footer';
import viewlist from '../pages/img/viewlist.png';
import viewgrid from '../pages/img/viewgrid.png';
import share from '../pages/img/share.png';
// import arrowdown from '../pages/img/arrowdown.png';
import arrowblack from '../pages/img/arrowblack.png'
// import { getItemsByType } from '../clothes';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import CardItem from './CardItem/CardItem';
import { getItemsByType } from '../products';

function Clothes() {
	let { type } = useParams();
	let items = getItemsByType(type).slice(0);
	let [colorCheck, setColorCheck] = useState(null);
	let [sizeCheck, setSizeCheck] = useState(null);
	let [brandCheck, setBrandCheck] = useState(null);
	let [price, setPriceCheck] = useState(null);

	const [isFilterOpen, toggleFilter] = useState(false);
	function toggleFilterMode() {
		toggleFilter(!isFilterOpen);
	}
	console.log(items)
	let arrColor = [];
	let arrSize = [];
	let arrBrand = [];

	items.forEach(item => {
		item.images.forEach(item => {
			if (!arrColor.includes(item.color)) {
				arrColor.push(item.color)
			}
		});
		if (!arrBrand.includes(item.brand)) {
			arrBrand.push(item.brand);
		};
		item.sizes.forEach(item => {
			if (!arrSize.includes(item)) {
				arrSize.push(item)
			}
		});
	})

	return (
		<div className='products-page' data-test-id={`products-page-${type}`}>
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
								<div className={classNames('filter-item-filter', { visible: isFilterOpen })}
									onClick={toggleFilterMode}>
									Filter
								</div>
								<div className="filter-item__view">
									<div className="fiter-item-view__image">
										<img src={viewlist} alt="viewlist" />
									</div>
									<div className="fiter-item-view__image">
										<img src={viewgrid} alt="viewgrid" />
									</div>
								</div>
							</div>
							<div className={classNames("filter-main", { visible: isFilterOpen })}>
								<div className="filter-main-columns">
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Color
										</div>
										<div className="filter-main__items">
											{arrColor.map(item => <div key={item} className="filter-main-items__item">
												<input type="checkbox" />
												<label>{item}</label>
											</div>)}
										</div>
									</div>
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Size
										</div>
										<div className="filter-main__items">
											{arrSize.map(item => <div key={item} className="filter-main-items__item">
												<input type="checkbox" />
												<label>{item}</label>
											</div>)}
										</div>
									</div>
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Brand
										</div>
										<div className="filter-main__items">
											{arrBrand.map(item => <div key={item} className="filter-main-items__item">
												<input type="checkbox" />
												<label >{item}</label>
											</div>)}
										</div>
									</div>
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Prise
										</div>
										<div className="filter-main__items">
											<div className="filter-main-items__item">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="card-area">
							<div className="card-grid">
								{items.map(item => <CardItem productType={type} key={item.id} id={item.id} name={item.name} cost={item.price} imgCard={item.images[0].url} />)}
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