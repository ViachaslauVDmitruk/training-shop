import './css/Categories.css';
import '../../components/main/Part3/css/Part3.css';
import Header from "../../components/Header/Header";
import Footer from '../../components/footer/footer';
import CardItemOne from '../../components/CardItem/CardItemOne';
import filter from '../img/filter.png';
import viewlist from '../img/viewlist.png';
import viewgrid from '../img/viewgrid.png';
import share from '../img/share.png';
import arrowdown from '../img/arrowdown.png';
import arrowblack from '../img/arrowblack.png';
import cardwoman01 from '../../components/main/Part3/img/woman/01.jpg';
import cardwoman02 from '../../components/main/Part3/img/woman/02.jpg';
import cardwoman03 from '../../components/main/Part3/img/woman/03.jpg';
import cardwoman04 from '../../components/main/Part3/img/woman/04.jpg';
import cardwoman05 from '../../components/main/Part3/img/woman/05.jpg';
import cardwoman06 from '../../components/main/Part3/img/woman/06.jpg';
import cardwoman07 from '../../components/main/Part3/img/woman/07.jpg';
import cardwoman08 from '../../components/main/Part3/img/woman/08.jpg';

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

function CategoriesWoman() {
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
								<div className="link-home__categoties">Woman</div>
							</div>
							<div className="link-share__items">
								<div className="link-share-item__image">
									<img src={share} alt="share" />
								</div>
								<div className="link-share-item__title">Share</div>
							</div>
						</div>
						<div className="categories-top-block__title">Woman</div>
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
							{cardWoman.map(item => <CardItemOne id={item.id} title={item.title} cost={item.cost} imgCard={item.imgCard} />)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default CategoriesWoman;