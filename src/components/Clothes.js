import '../pages/Categories/css/Clothes.css';
import './main/Part3/css/Part3.css';
import Header from "./Header/Header";
import Footer from './footer/footer';
import viewlist from '../pages/img/viewlist.png';
import viewgrid from '../pages/img/viewgrid.png';
import share from '../pages/img/share.png';
import arrowblack from '../pages/img/arrowblack.png'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import CardItem from './CardItem/CardItem';
import { getItemsByType } from '../products';

function Clothes() {
	let { type } = useParams();
	let allClothes = getItemsByType(type);
	let [items, setItems] = useState(getItemsByType(type));
	let [colorCheck, setColorCheck] = useState([]);
	let [sizeCheck, setSizeCheck] = useState([]);
	let [brandCheck, setBrandCheck] = useState([]);
	let [priceCheck, setPriceCheck] = useState([]);

	let arrColor = [];
	let arrSize = [];
	let arrBrand = [];
	let arrPrice = [
		{
			id: 1,
			min: 1500,
			max: 3000,
		},
		{
			id: 2,
			min: 1000,
			max: 1500,
		},
		{
			id: 3,
			min: 650,
			max: 1000,
		},
		{
			id: 4,
			min: 300,
			max: 650,
		},
		{
			id: 5,
			min: 70,
			max: 300,
		},
		{
			id: 6,
			min: 5,
			max: 70,
		},
	];

	// function resetFilter() {
	// 	toggleFilter(false);
	// 	setItemsFound(false);
	// 	setColorCheck(colorCheck = []);
	// 	setBrandCheck(brandCheck = []);
	// 	setPriceCheck(priceCheck = []);
	// 	setSizeCheck(sizeCheck = []);
	// 	console.log("resetfilter");
	// 	console.log('colorcheck', colorCheck);
	// 	console.log('sizecheck', sizeCheck);
	// 	console.log('pricecheck', priceCheck);
	// 	console.log('brandckeck', brandCheck);
	// }

	const [isFilterOpen, toggleFilter] = useState(false);
	const [itemsFound, setItemsFound] = useState(false);

	function toggleFilterMode() {
		toggleFilter(!isFilterOpen);
	};
	allClothes.forEach(item => {
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
	});
	function handleColorCheck(color) {
		if (colorCheck.includes(color)) {
			colorCheck = colorCheck.filter(item => item !== color);
		} else {
			colorCheck = [...colorCheck, color];
		}
		setColorCheck(colorCheck);
	};
	function handleSizeCheck(size) {
		if (sizeCheck.includes(size)) {
			sizeCheck = sizeCheck.filter(item => item !== size);
		} else {
			sizeCheck = [...sizeCheck, size];
		}
		setSizeCheck(sizeCheck);
	};
	function handleBrandCheck(brand) {
		if (brandCheck.includes(brand)) {
			brandCheck = brandCheck.filter(item => item !== brand);
		} else {
			brandCheck = [...brandCheck, brand];
		}
		setBrandCheck(brandCheck);
	};
	function handlePriceCheck(price) {
		if (priceCheck.some(item => item.id === price.id)) {
			priceCheck = priceCheck.filter(item => item.id !== price.id);
		} else {
			priceCheck = [...priceCheck, price];
		}
		setPriceCheck(priceCheck);
	};


	useEffect(() => {
		toggleFilter(false);
		setItemsFound(false);
		setColorCheck([]);
		setBrandCheck([]);
		setPriceCheck([]);
		setSizeCheck([]);
		// console.log("resetfilter");
		// console.log('colorcheck', colorCheck);
		// console.log('colorcheck', colorCheck);
		// console.log('sizecheck', sizeCheck);
		// console.log('pricecheck', priceCheck);
		// console.log('brandckeck', brandCheck);
	}, [type])

	useEffect(() => {
		setItems(() => {
			return allClothes.filter((cloth) => {
				let isSelected =
					(cloth.images.some((image) => {
						return colorCheck.length === 0 || colorCheck.includes(image.color);
					}))
					&&
					(cloth.sizes.some((size) => {
						return sizeCheck.length === 0 || sizeCheck.includes(size);
					}))
					&&
					(brandCheck.length === 0 || brandCheck.includes(cloth.brand))
					&&
					(priceCheck.some((price) => {
						let isSelectedMax = (price.max && cloth.price <= price.max) || !price.max;
						let isSelectedMin = (price.min && cloth.price >= price.min) || !price.min;
						return isSelectedMax && isSelectedMin;
					}) || priceCheck.length === 0)

				return isSelected;
			});
		});
		if (colorCheck.length || sizeCheck.length || brandCheck.length || priceCheck.length) {
			setItemsFound(true);
		} else {
			setItemsFound(false);
		};
	}, [colorCheck, sizeCheck, brandCheck, priceCheck, allClothes]);

	return (
		<div className='products-page' data-test-id={`products-page-${type}`}>
			<div className="wrapper">
				<Header />
				<div className="main">
					<div className="categories__top-block">
						<div className="container">
							<div className="categories-top-block__links">
								<div className="link-home">
									<Link to='/' className="link-home__title">Home </Link>
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
								<div data-test-id='filter-button' className={classNames('filter-item-filter', { visible: isFilterOpen })}
									onClick={toggleFilterMode} >
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
							<div data-test-id={`filters-${type}`} className={classNames("filter-main", { visible: isFilterOpen })}>
								<div className="filter-main-columns">
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Color
										</div>
										<div data-test-id={'filters-color'} className="filter-main__items">
											{arrColor.map(item => <div data-test-id={`filter-color-${item}`} key={item} className="filter-main-items__item" >
												<input type="checkbox" checked={colorCheck.includes(item)} onChange={() => handleColorCheck(item)} value={item} />
												<label>{item}</label>
											</div>)}
										</div>
									</div>
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Size
										</div>
										<div data-test-id={'filters-size'} className="filter-main__items">
											{arrSize.map(item => <div data-test-id={`filter-size-${item}`} key={item} className="filter-main-items__item">
												<input type="checkbox" checked={sizeCheck.includes(item)} onChange={() => handleSizeCheck(item)} value={item} />
												<label>{item}</label>
											</div>)}
										</div>
									</div>
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Brand
										</div>
										<div data-test-id={'filters-brand'} className="filter-main__items">
											{arrBrand.map(item => <div data-test-id={`filter-brand-${item}`} key={item} className="filter-main-items__item">
												<input type="checkbox" checked={brandCheck.includes(item)} onChange={() => handleBrandCheck(item)} value={item} />
												<label >{item}</label>
											</div>)}
										</div>
									</div>
									<div className="filter-main-columns__column">
										<div className="filter-main-column__title">
											Prise
										</div>
										<div className="filter-main__items">
											{arrPrice.map(item => <div key={item.id} className="filter-main-items__item">
												<input type="checkbox" checked={priceCheck.some(elem => elem.id === item.id)} onChange={() => handlePriceCheck(item)} value={item} />
												<label >${item.min} - ${item.max}</label>
											</div>)}
										</div>
									</div>
								</div>
							</div>
							<div className={classNames("filter-found", { visible: itemsFound })}>
								<div className="filter-found__number">
									{items.length} items Found
								</div>
								{colorCheck.map(item => <div key={item} className="filter-found__color">
									Color: {item}
								</div>)}
								{sizeCheck.map(item => <div key={item} className="filter-found__size">
									Size: {item}
								</div>)}
								{brandCheck.map(item => <div key={item} className="filter-found__brand">
									Brand: {item}
								</div>)}
								{priceCheck.map(item => <div key={item.id} className="filter-found__brand">
									Price: ${item.min} - ${item.max}
								</div>)}
							</div>
						</div>
					</div>
					<div className="container">
						<div className="card-area">
							<div className="card-grid">
								{items.map(item => <CardItem productType={type} key={item.id} id={item.id} name={item.name} cost={item.price} imgCard={item.images[0].url} discount={item.discount} rating={item.rating} />)}
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