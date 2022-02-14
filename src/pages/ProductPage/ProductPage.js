import { Link, HashRouter as Router, Route } from 'react-router-dom';
import './css/ProductPage.css';
import Header from '../../components/Header/Header';

import share from '../img/share.png';
import arrowdown from '../img/arrowdown.png';
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
									<img src={arrowblack} alt="" />
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
													<img src={arrowsliderup} alt="" />
												</div>
												<div className="vertical-arrows__image">
													<img src={arrowsliderdown} alt="" />
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
											<img src={sizeguide} alt="" />
										</div>
										<div className="parametrs-guide__text">Size guide</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}
export default ProductPage;