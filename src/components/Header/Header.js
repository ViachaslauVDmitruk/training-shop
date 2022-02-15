import { Link, HashRouter as Router, Route } from 'react-router-dom';
import './css/header.css';
import facebook from './img/social/facebook01.svg';
import twitter from './img/social/logo-twitter01.svg';
import insta from './img/social/instagram01.svg';
import pinterest from './img/social/logo-pinterest01.svg';
import search from './img/header/search01.svg';
import globe from './img/header/globe01.svg';
import shoppingbag from './img/header/shoppingbag01.svg';
import user from './img/header/user01.svg';

const headerNavMenu = [
	{ id: 1, link: "About Us", },
	{ id: 2, link: "Woman", },
	{ id: 3, link: "Men", },
	{ id: 4, link: "Beauty", },
	{ id: 5, link: "Accessories", },
	{ id: 6, link: "Blog", },
	{ id: 7, link: "Contact", },
]

function Header() {
	return (
		<Router>
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
											<a href="#" className="header-top-info__link link_marker">Belarus, Gomel, Lange 17</a></li>
										<li>
											<a href="#" className="header-top-info__link link_clock">All week 24/7</a></li>
									</ul>
								</nav>
							</div>
							<div className="header-top__column">
								<nav className="header-top__social">
									<ul className='header-top-social__list'>
										<li><a href="#" className="header-top-social__link">
											<img src={facebook} className="header-top__img" alt="facebook" />
										</a>
										</li>
										<li>
											<a href="#" className="header-top-social__link">
												<img src={twitter} className="header-top__img" alt="twitter" />
											</a>
										</li>
										<li>
											<a href="#" className="header-top-social__link">
												<img src={insta} className="header-top__img" alt="insta" />
											</a>
										</li>
										<li>
											<a href="#" className="header-top-social__link">
												<img src={pinterest} className="header-top__img" alt="pinterest" />
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
								<div className="header-bottom__column number-1">
									<div className="header-bottom__home">
										<Link exact to='/' className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
									</div>
								</div>
								<div className="header-bottom__column number-2">
									<div className='menu' data-tesr-id='menu'>
										<ul className="header-bottom-menu__list">
											{headerNavMenu.map(item => <li><Link key={item.id} to={`/${item.link}`} className='menu-item' data-test-id={`menu-link-${item.link}`}>{item.link}</Link></li>)}
										</ul>
									</div>
								</div>
								<div className="header-bottom__column number-3">
									<div className="header-bottom-icons">
										<div className="header-bottom__icon">
											<img src={search} alt="search" />
										</div>
										<div className="header-bottom__icon">
											<img src={globe} alt="globe" />
										</div>
										<div className="header-bottom__icon">
											<img src={user} alt="user" />
										</div>
										<div className="header-bottom__icon">
											<img src={shoppingbag} alt="shoppingbag" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</Router >
	);
}

export default Header;
