import './css/header.css';
import facebook from './img/social/facebook01.svg';
import twitter from './img/social/logo-twitter01.svg';
import insta from './img/social/instagram01.svg';
import pinterest from './img/social/logo-pinterest01.svg';
import search from './img/header/search01.svg';
import globe from './img/header/globe01.svg';
import shoppingbag from './img/header/shoppingbag01.svg';
import user from './img/header/user01.svg';

function Header() {
	return (
		<div className="header" data-test-id='header'>
			<div className="header__top">
				<div className="container">
					<div className="header-top__columns">
						<div className="header-top__column">
							<nav className="header-top__info">
								<ul className='header-top-info__list'>
									<li>
										<a href="tel:375291002030" className="header-top-info__link link_phone">+375 29 100 20 30</a></li>
									<li>

										<a href="" className="header-top-info__link link_marker">Belarus, Gomel, Lange 17</a></li>
									<li>

										<a href="" className="header-top-info__link link_clock">All week 24/7</a></li>
								</ul>
							</nav>
						</div>
						<div className="header-top__column">
							<nav className="header-top__social">
								<ul className='header-top-social__list'>
									<li><a href="" className="header-top-social__link">
										<img src={facebook} className="header-top__img" alt="" />
									</a>
									</li>
									<li>
										<a href="" className="header-top-social__link">
											<img src={twitter} className="header-top__img" alt="" />
										</a>
									</li>
									<li>
										<a href="" className="header-top-social__link">
											<img src={insta} className="header-top__img" alt="" />
										</a>
									</li>
									<li>
										<a href="" className="header-top-social__link">
											<img src={pinterest} className="header-top__img" alt="" />
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="header__bottom">
					<div className="container">
						<div className="header-bottom__columns">
							<div className="header-bottom__column">
								<div className="header-bottom__home">
									<a href="" className="header-home__link">CleverShop</a>
								</div>
							</div>
							<div className="header-bottom__column">
								<nav className="header-bottom__menu">
									<ul className="header-bottom-menu__list">
										<li>
											<a href="" className="header-bottom-menu__link">About Us</a>
										</li>
										<li>
											<a href="" className="header-bottom-menu__link">Women</a>
										</li>
										<li>
											<a href="" className="header-bottom-menu__link">Men</a>
										</li>
										<li>
											<a href="" className="header-bottom-menu__link">Beauty</a>
										</li>
										<li>
											<a href="" className="header-bottom-menu__link">Accessories</a>
										</li>
										<li>
											<a href="" className="header-bottom-menu__link">Blog</a>
										</li>
										<li>
											<a href="" className="header-bottom-menu__link">Contact</a>
										</li>
									</ul>
								</nav>
							</div>
							<div className="header-bottom__column">
								<div className="header-bottom-icons">
									<div className="header-bottom__icon">
										<img src={search} alt="" />
									</div>
									<div className="header-bottom__icon">
										<img src={globe} alt="" />
									</div>
									<div className="header-bottom__icon">
										<img src={user} alt="" />
									</div>
									<div className="header-bottom__icon">
										<img src={shoppingbag} alt="" />
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

export default Header;
