import { Link, HashRouter as Router, Route } from 'react-router-dom';
import './css/Categories.css';
import '../../components/main/Part3/css/Part3.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/footer/footer';

import filter from '../img/filter.png';
import viewlist from '../img/viewlist.png';
import viewgrid from '../img/viewgrid.png';
import share from '../img/share.png';
import arrowdown from '../img/arrowdown.png';
import arrowblack from '../img/arrowblack.png';
import CardItemMan from '../../components/CardItem/CardItemMan';

function CategoriesMan() {
	return (
		<div className="wrapper">
			<Header />
			<div className="main">
				<div className="categories__top-block">
					<div className="container">
						<div className="categories-top-block__links">
							<div className="link-home">
								<div className="link-home__title">Home</div>
								<div className="link-home__image">
									<img src={arrowblack} alt="" />
								</div>
								<div className="link-home__categoties">Man</div>
							</div>
							<div className="link-share__items">
								<div className="link-share-item__image">
									<img src={share} alt="share" />
								</div>
								<div className="link-share-item__title">Share</div>
							</div>
						</div>
						<div className="categories-top-block__title">Man</div>
					</div>
				</div>
				<div className="filter-block">
					<div className="container">
						<div className="filter-block-items">
							<div className="filter-item-filter">
								<div className="filter-item__image">
									<img src={filter} alt="" />
								</div>
								<div className="filter-item__title">Filter</div>
							</div>
							<div className="filter-item__view">
								<div className="fiter-item-view__image">
									<img src={viewlist} alt="" />
								</div>
								<div className="fiter-item-view__image">
									<img src={viewgrid} alt="" />
								</div>
							</div>
							<div className="filter-item__select">
								<div className="filter-item-select__title">BESTSELLERS</div>
								<div className="filter-item-select__image">
									<img src={arrowdown} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="card-area">
						<div className="card-grid">
							<CardItemMan />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default CategoriesMan;