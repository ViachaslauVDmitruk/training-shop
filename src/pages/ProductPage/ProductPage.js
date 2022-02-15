// import { Link, HashRouter as Router, Route } from 'react-router-dom';
import './css/ProductPage.css';
import '../Categories/css/Categories.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/footer';
import CardItemOne from '../../components/CardItem/CardItemOne';

import share from '../img/share.png';
import arrowblack from '../img/arrowblack.png';
import StarYellow from '../img/starYellow.png';
import arrowsliderup from '../img/arrowsliderup.png';
import arrowsliderdown from '../img/arrowsliderdown.png';
import arrowleft from '../img/arrowleft.png';
import arrowright from '../img/arrowright.png';
import slidervertical01 from '../img/slidervertical/01.jpg';
import slidervertical02 from '../img/slidervertical/02.jpg';
import slidervertical03 from '../img/slidervertical/03.jpg';
import slidervertical04 from '../img/slidervertical/04.jpg';
import imagebig from '../img/imagebig.jpg';
import sizeguide from '../img/sizeguide.png';
import paramtype01 from '../img/productcolor/01.jpg';
import paramtype02 from '../img/productcolor/02.jpg';
import paramtype03 from '../img/productcolor/03.jpg';
import paramtype04 from '../img/productcolor/04.jpg';
import heart from '../img/heart.png';
import scale from '../img/scale.png';
import delivery from '../img/delivery.png';
import exchange from '../img/exchange.png';
import letter from '../img/letter.png';
import logo01 from '../img/logo/01.png';
import logo02 from '../img/logo/02.png';
import logo03 from '../img/logo/03.png';
import logo04 from '../img/logo/04.png';
import logo05 from '../img/logo/05.png';
import logo06 from '../img/logo/06.png';
import logo07 from '../img/logo/07.png';
import write from '../img/write.png';

import cardwoman01 from '../img/cardimage/01.jpg';
import cardwoman02 from '../img/cardimage/02.jpg';
import cardwoman03 from '../img/cardimage/03.jpg';
import cardwoman04 from '../img/cardimage/04.jpg';

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
]
const logo = [
	{ img: logo01, },
	{ img: logo02, },
	{ img: logo03, },
	{ img: logo04, },
	{ img: logo05, },
	{ img: logo06, },
	{ img: logo07, },
]

function ProductPage() {
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
								<div className="link-home__categoties">Women</div>
							</div>
							<div className="link-share__items">
								<div className="link-share-item__image">
									<img src={share} alt="share" />
								</div>
								<div className="link-share-item__title">Share</div>
							</div>
						</div>
						<div className="categories-top-block__title product-name">Women's tracksuit Q109</div>
						<div className="product-availability">
							<div className="reviews">
								<div className="reviews__image">
									<img src={StarYellow} alt="staryellow" />
								</div>
								<div className="reviews__image">
									<img src={StarYellow} alt="staryellow" />
								</div>
								<div className="reviews__image">
									<img src={StarYellow} alt="staryellow" />
								</div>
								<div className="reviews__image">
									<img src={StarYellow} alt="staryellow" />
								</div>
								<div className="reviews__image">
									<img src={StarYellow} alt="staryellow" />
								</div>
								<div className="reviews__text">2 Reviews</div>
							</div>
							<div className="avilability__rows">
								<div className="avilability-row">
									<div className="avilability-row__items">
										<div className="avilability-row-item__text">SKU:</div>
										<div className="avilability-row-item__number">777</div>
									</div>
								</div>
								<div className="avilability-row">
									<div className="avilability-row__items">
										<div className="avilability-row-item__text">Avilabibity:</div>
										<div className="avilability-row-item__number">In Stock</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="product__info">
						<div className="product-info__columns">
							<div className="product-info__column">
								<div className="product-image__columns">
									<div className="product-image__column">
										<div className="product-image-slider__vertical">
											<div className="product-image-slider-vertical__arrows">
												<div className="vertical-arrows__image">
													<img src={arrowsliderup} alt="arrowsliderup" />
												</div>
												<div className="vertical-arrows__image">
													<img src={arrowsliderdown} alt="arrowsliderdown" />
												</div>
											</div>
											<div className="product-image-slider-vertical__image">
												<img src={slidervertical01} alt="slidervertical01" />
											</div>
											<div className="product-image-slider-vertical__image">
												<img src={slidervertical02} alt="slidervertical02" />
											</div>
											<div className="product-image-slider-vertical__image">
												<img src={slidervertical03} alt="slidervertical03" />
											</div>
											<div className="product-image-slider-vertical__image">
												<img src={slidervertical04} alt="slidervertical04" />
											</div>
										</div>
									</div>
									<div className="product-image__column big">
										<div className="product-image__big">
											<img src={imagebig} alt="imagebig" />
										</div>
										{/* <div className="slider-line">
												<div className="slider-line-arrows__image">
													<img src={arrowleft} alt="arrowleft" />
												</div>
												<div className="slider-line-arrows__image">
													<img src={arrowright} alt="arrowright" />
												</div>
											</div> */}
									</div>
								</div>
							</div>
							<div className="product-info__column rigth">
								<div className="product-info__parametrs">
									<div className="product-info-parametrs__colors">
										<div className="parametrs-colors__text">Color:</div>
										<div className="parametrs-colors__color">Blue</div>
									</div>
									<div className="product-info-parametrs__type">
										<div className="parametrs-type__columns">
											<div className="parametrs-type__column">
												<div className="parametrs-type-column__image">
													<img src={paramtype01} alt="paramtype01" />
												</div>
											</div>
											<div className="parametrs-type__column">
												<div className="parametrs-type-column__image">
													<img src={paramtype02} alt="paramtype02" />
												</div>
											</div>
											<div className="parametrs-type__column">
												<div className="parametrs-type-column__image">
													<img src={paramtype03} alt="paramtype03" />
												</div>
											</div>
											<div className="parametrs-type__column">
												<div className="parametrs-type-column__image">
													<img src={paramtype04} alt="paramtype04" />
												</div>
											</div>
										</div>
									</div>
									<div className="product-info-parametrs__sizes">
										<div className="parametrs-sizes__text">Size:</div>
										<div className="parametrs-sizes__size">S</div>
									</div>
									<div className="product-info-parametrs__type-sizes">
										<button className="type-sizes__block">XS</button>
										<button className="type-sizes__block s">S</button>
										<button className="type-sizes__block">XS</button>
										<button className="type-sizes__block">XS</button>
									</div>
									<div className="product-info-parametrs__guide">
										<div className="parametrs-guide__image">
											<img src={sizeguide} alt="sizeguide" />
										</div>
										<div className="parametrs-guide__text">Size guide</div>
									</div>
								</div>
								<div className="product-info__cost">
									<div className="product-info-cost__block">$379.99</div>
									<div className="product-info-cost__row">
										<buttom className="product-info__addcard">Add to card</buttom>
										<div className="protuct-info-cost__image">
											<img src={heart} alt="heart" />
										</div>
										<div className="protuct-info-cost__image">
											<img src={scale} alt="scale" />
										</div>
									</div>
								</div>
								<div className="product-info__services">
									<div className="services__row">
										<div className="services-row__column">
											<div className="services-row-column__image">
												<img src={delivery} alt="delivery" />
											</div>
											<div className="services-row-column__text">Shipping & Delivery</div>
										</div>
										<div className="services-row__column">
											<div className="services-row-column__image">
												<img src={exchange} alt="exchange" />
											</div>
											<div className="services-row-column__text">Returns & Exchanges</div>
										</div>
										<div className="services-row__column">
											<div className="services-row-column__image">
												<img src={letter} alt="letter" />
											</div>
											<div className="services-row-column__text">Ask a question</div>
										</div>
									</div>
								</div>
								<div className="product-info__guaranted">
									<div className="product-info-guaranted__text">guaranteed safe checkout</div>
									<div className="product-info-guaranted__line"></div>
								</div>
								<div className="product-info__payservices">
									{logo.map(item => <div className="product-info-payservices__logo">
										<img src={item.img} alt="img" />
									</div>)}
								</div>
								<div className="product-info__description">
									<div className="product-info-description__text">DESCRIPTION</div>
								</div>
								<div className="product-info__additional">
									<div className="product-info-additional__title">ADDITIONAL INFORMATION</div>
									<div className="product-info-additional__item">Color: <span>Blue, White, Black, Grey</span></div>
									<div className="product-info-additional__item">Size: <span>XS, S, M, L</span></div>
									<div className="product-info-additional__item">Material:	<span>100% Polyester</span></div>
								</div>
								<div className="product-info__reviews">
									<div className="product-info-reviews__title">
										Reviews
									</div>
									<div className="product-info-reviews__row">
										<div className="reviews">
											<div className="reviews__image">
												<img src={StarYellow} alt="staryellow" />
											</div>
											<div className="reviews__image">
												<img src={StarYellow} alt="staryellow" />
											</div>
											<div className="reviews__image">
												<img src={StarYellow} alt="staryellow" />
											</div>
											<div className="reviews__image">
												<img src={StarYellow} alt="staryellow" />
											</div>
											<div className="reviews__image">
												<img src={StarYellow} alt="staryellow" />
											</div>
											<div className="reviews__text">2 Reviews</div>
										</div>
										<div className="product-info-reviews-row__write">
											<div className="product-info-write__image">
												<img src={write} alt="write" />
											</div>
											<div className="product-info-write__text">Write a review</div>
										</div>
									</div>
									<div className="product-info-reviews__private">
										<div className="product-info-reviews-private__block">
											<div className="product-info-reviews-private__title">
												<div className="product-info-reviews-private-title__name">Oleh Chabanov</div>
												<div className="reviews revers">
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__text text-revers">3 months ago</div>
												</div>
											</div>
											<div className="product-info-reviews-private__text">On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</div>
										</div>
									</div>
									<div className="product-info-reviews__private">
										<div className="product-info-reviews-private__block">
											<div className="product-info-reviews-private__title">
												<div className="product-info-reviews-private-title__name">ShAmAn design</div>
												<div className="reviews revers">
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__image">
														<img src={StarYellow} alt="staryellow" />
													</div>
													<div className="reviews__text text-revers">2 months ago</div>
												</div>
											</div>
											<div className="product-info-reviews-private__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="product__related">
						<div className="product-related__slider">
							<div className="product-related-slider__title">RELATED PRODUCTS</div>
							<div className="product-related-slider__arrows">
								<div className="line-arrows__image">
									<img src={arrowleft} alt="arrowleft" />
								</div>
								<div className="line-arrows__image">
									<img src={arrowright} alt="arrowright" />
								</div>
							</div>
						</div>
						<div className="product-related__grid">
							{cardWoman.map(item => <CardItemOne id={item.id} title={item.title} cost={item.cost} imgCard={item.imgCard} />)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default ProductPage;