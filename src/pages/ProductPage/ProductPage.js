import './css/ProductPage.css';
import '../Categories/css/Clothes.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/footer';
import share from '../img/share.png';
import arrowblack from '../img/arrowblack.png';
import arrowleft from '../img/arrowleft.png';
import arrowright from '../img/arrowright.png';
import sizeguide from '../img/sizeguide.png';
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
import { Link, useParams } from 'react-router-dom';
import SliderProduct from '../../components/sliderproduct/SliderProduct';
import SliderRelated from '../../components/sliderrelared/SliderRelated';
import Rating from '../../components/rating/rating';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { connect, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/Shopping/shopping-actions';
import Review from '../../components/review/review';
import { PRODUCTS } from '../../poduct';

const logo = [
	{ img: logo01 },
	{ img: logo02 },
	{ img: logo03 },
	{ img: logo04 },
	{ img: logo05 },
	{ img: logo06 },
	{ img: logo07 },
];

function ProductPage({ props, addToCart, productData, removeFromCart, cart }) {
	let { type, id } = useParams();
	//   let setItem = useSelector((store) => store.shop.products[type]);
	let setItem = PRODUCTS[type];
	let item = setItem?.find((item) => item.id === id);
	let arrColor = [];
	let arrImageWithColor = [];
	let [inCart, setInCart] = useState(false);
	let [selectedSize, setSelectedSize] = useState();
	let [selectedColor, isSelectedColor] = useState();
	let [selectedImage, setSelectedImage] = useState();
	const [isReviewOpen, setIsReviewOpen] = useState(false);

	useEffect(() => {
		if (item) {
			setSelectedSize(item.sizes[0]);
			isSelectedColor(item.images[0].color);
			setSelectedImage(item.images[0].url);
			setInCart(false);
		}
		window.scrollTo(0, 0);
	}, [item]);

	item?.images.forEach((img) => {
		if (!arrColor.includes(img.color)) {
			arrColor.push(img.color);
			arrImageWithColor.push(img);
		}
	});

	useEffect(() => {
		setInCart(() => {
			return cart.find((elem) => elem.color === selectedColor && elem.size === selectedSize && elem.id === item.id);
		});
	}, [selectedColor, selectedSize, cart, setInCart, item]);

	function inCartToggleMode() {
		if (cart.some((elem) => elem.color === selectedColor && elem.size === selectedSize && elem.id === item.id)) {
			setInCart(!inCart);
		} else {
			setInCart(inCart);
		}
	}

	useEffect(() => {
		if (isReviewOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	});

	return (
		<div className="product-page" data-test-id={`product-page-${type}`}>
			<div className="wrapper">
				{isReviewOpen && <Review active={isReviewOpen} setActive={setIsReviewOpen} id={id} type={type} />}
				<Header />
				{item && (
					<div className="main">
						<div className="categories__top-block">
							<div className="container">
								<div className="categories-top-block__links">
									<div className="link-home">
										<Link to="/" className="link-home__title">
											Home
										</Link>
										<div className="link-home__image">
											<img src={arrowblack} alt="arrowblack" />
										</div>
										<Link to={`/${type}`} className="link-home__categoties">
											{type}
										</Link>
										<div className="link-home__image">
											<img src={arrowblack} alt="arrowblack" />
										</div>
										{item ? <div className="link-home__categoties">{item.name}</div> : <></>}
									</div>
									<div className="link-share__items">
										<div className="link-share-item__image">
											<img src={share} alt="share" />
										</div>
										<div className="link-share-item__title">Share</div>
									</div>
								</div>
								{item ? <div className="categories-top-block__title product-name">{item.name}</div> : <></>}
								<div className="product-availability">
									{item ? (
										<div className="reviews">
											<div className="reviews__image">
												<Rating ratingProps={item.rating} />
											</div>
											<div className="reviews__text">{item.reviews.length} reviews</div>
										</div>
									) : (
										<></>
									)}
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
											<SliderProduct />
										</div>
									</div>
									<div className="product-info__column rigth">
										<div className="product-info__parametrs">
											<div className="product-info-parametrs__colors">
												<div className="parametrs-colors__text">Color:</div>
												<div className="parametrs-colors__color">{selectedColor}</div>
											</div>
											<div className="product-info-parametrs__type">
												<div className="parametrs-type__columns">
													{arrImageWithColor.map((item) => (
														<div
															key={item.color}
															className={classNames('parametrs-type-column__image', {
																border: selectedColor === item.color,
															})}
															onClick={() => {
																isSelectedColor(item.color);
																setSelectedImage(item.url);
															}}
														>
															{/* <img src={`https://training.cleverland.by/shop${item.url}`} alt="imgCard" /> */}
															<img src={item.url} alt="imgCard" />
														</div>
													))}
												</div>
											</div>
											<div className="product-info-parametrs__sizes">
												<div className="parametrs-sizes__text">Size:</div>
												<div className="parametrs-sizes__size">{selectedSize}</div>
											</div>
											{item ? (
												<div className="product-info-parametrs__type-sizes ">
													{item.sizes.map((item) => (
														<div
															key={item}
															className={classNames('type-sizes__block', { border: selectedSize === item })}
															onClick={() => setSelectedSize(item)}
														>
															{item}
														</div>
													))}
												</div>
											) : (
												<></>
											)}
											<div className="product-info-parametrs__guide">
												<div className="parametrs-guide__image">
													<img src={sizeguide} alt="sizeguide" />
												</div>
												<div className="parametrs-guide__text">Size guide</div>
											</div>
										</div>
										<div className="product-info__cost">
											{item ? <div className="product-info-cost__block">$ {item.price}</div> : <></>}
											<div className="product-info-cost__row">
												<button
													data-test-id="add-cart-button"
													onClick={() => {
														addToCart(item.id, selectedColor, selectedSize, selectedImage, item.price, item.name);
														inCartToggleMode();
													}}
													className={classNames('product-info__addcard', { notincart: !inCart })}
												>
													Add to cart
												</button>
												<button
													onClick={() => {
														removeFromCart(item.id, selectedColor, selectedSize, selectedImage, item.price, item.name);
														inCartToggleMode();
													}}
													className={classNames('product-info__addcard', { incart: inCart })}
												>
													Remove from cart
												</button>
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
											{logo.map((item) => (
												<div key={item.img} className="product-info-payservices__logo">
													<img src={item.img} alt="img" />
												</div>
											))}
										</div>
										<div className="product-info__description">
											<div className="product-info-description__text">DESCRIPTION</div>
										</div>
										<div className="product-info__additional">
											<div className="product-info-additional__title">ADDITIONAL INFORMATION</div>
											<div className="product-info-additional__item">
												Color:{' '}
												{arrImageWithColor.map((item) => (
													<span key={item.color}>{item.color}</span>
												))}{' '}
											</div>
											<div className="product-info-additional__item">
												Size: <span key={item.id}>{item.sizes.join(', ')}</span>
											</div>
											<div className="product-info-additional__item">
												Material: <span key={item.id}>{item.material}</span>
											</div>
										</div>
										<div className="product-info__reviews">
											<div className="product-info-reviews__title">Reviews</div>
											<div className="product-info-reviews__row">
												<div className="reviews">
													<div className="reviews__image">
														<Rating ratingProps={item.rating} />
													</div>
													<div className="reviews__text">{item.reviews.length} reviews</div>
												</div>
												<div
													data-test-id="review-button"
													className="product-info-reviews-row__write"
													onClick={() => setIsReviewOpen(true)}
												>
													<div className="product-info-write__image">
														<img src={write} alt="write" />
													</div>
													<div className="product-info-write__text">Write a review</div>
												</div>
											</div>
											{item?.reviews.map((item) => (
												<div className="product-info-reviews__private" key={item.id}>
													<div className="product-info-reviews-private__title">
														<div className="product-info-reviews-private-title__name">{item.name}</div>
														<div className="reviews revers">
															<div className="reviews__image">
																<Rating ratingProps={item.rating} />
															</div>
															<div className="reviews__text text-revers">3 months ago</div>
														</div>
													</div>
													<div className="product-info-reviews-private__text">{item.text}</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="product__related">
								<div className="product-related__slider">
									<div className="product-related-slider__title">RELATED PRODUCTS</div>
									<div className="product-related-slider__arrows">
										<div className="line-arrows__image prev">
											<img src={arrowleft} alt="arrowleft" />
										</div>
										<div className="line-arrows__image next">
											<img src={arrowright} alt="arrowright" />
										</div>
									</div>
								</div>
								<div className="product-related-slider-slider">
									<SliderRelated />
								</div>
							</div>
						</div>
					</div>
				)}
				<Footer />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cart: state.shop.cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item, color, size, image, price, name) => dispatch(addToCart(item, color, size, image, price, name)),
		removeFromCart: (id, color, size) => dispatch(removeFromCart(id, color, size)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps, null)(ProductPage);
