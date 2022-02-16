import './css/Categories.css';
import '../../components/main/Part3/css/Part3.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/footer/footer';
import CardItem from '../../components/CardItem/CardItem';
import filter from '../img/filter.png';
import viewlist from '../img/viewlist.png';
import viewgrid from '../img/viewgrid.png';
import share from '../img/share.png';
import arrowdown from '../img/arrowdown.png';
import arrowblack from '../img/arrowblack.png';
import cardman01 from '../../components/main/Part3/img/man/01.jpg';
import cardman02 from '../../components/main/Part3/img/man/02.jpg';
import cardman03 from '../../components/main/Part3/img/man/03.jpg';
import cardman04 from '../../components/main/Part3/img/man/04.jpg';
import cardman05 from '../../components/main/Part3/img/man/05.jpg';
import cardman06 from '../../components/main/Part3/img/man/06.jpg';
import cardman07 from '../../components/main/Part3/img/man/07.jpg';
import cardman08 from '../../components/main/Part3/img/man/08.jpg';

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
									<img src={arrowblack} alt="arrowblack" />
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
							{cardMan.map(item => <CardItem id={item.id} title={item.title} cost={item.cost} imgCard={item.imgCard} />)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default CategoriesMan;