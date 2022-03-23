import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './css/header.css';
import facebook from './img/social/facebook01.svg';
import twitter from './img/social/logo-twitter01.svg';
import insta from './img/social/instagram01.svg';
import pinterest from './img/social/logo-pinterest01.svg';
import search from './img/header/search01.svg';
import globe from './img/header/globe01.svg';
import shoppingbag from './img/header/shoppingbag01.svg';
import user from './img/header/user01.svg';
import { useState, useEffect } from 'react';
import Cart from '../cart/cart';
import { connect, useSelector } from 'react-redux';

const headerNavMenu = [
	{ id: 1, link: "About Us", },
	{ id: 2, link: "Women", },
	{ id: 3, link: "Men", },
	{ id: 4, link: "Beauty", },
	{ id: 5, link: "Accessories", },
	{ id: 6, link: "Blog", },
	{ id: 7, link: "Contact", },
]

function Header({ cart }) {
	let isReadyCart = useSelector(store => store.shop.products);
	const [cartCount, setCartCount] = useState(0);
	const [isMenuOpen, toggleMenu] = useState(false);
	const [isCartOpen, toggleCart] = useState(false);

	function toggleMenuMode() {
		toggleMenu(!isMenuOpen);
	}

	useEffect(() => {
		let count = 0;
		count = cart.length
		setCartCount(count);
	}, [cart, cartCount]);
	useEffect(() => {
		if (isCartOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	})

	return (
		<div className='header' data-test-id='header'>
			<div className="header__top">
				<div className="container">
					<div className="header-top__columns">
						<div className="header-top__column">
							<nav className="header-top__info">
								<ul className='header-top-info__list'>
									<li>
										<a href="tel:375291002030" className="header-top-info__link link_phone">+375 29 100 20 30</a></li>
									<li>
										<a href="/" className="header-top-info__link link_marker">Belarus, Gomel, Lange 17</a></li>
									<li>
										<a href="/" className="header-top-info__link link_clock">All week 24/7</a></li>
								</ul>
							</nav>
						</div>
						<div className="header-top__column">
							<nav className="header-top__social">
								<ul className='header-top-social__list'>
									<li><a href="/" className="header-top-social__link">
										<img src={facebook} className="header-top__img" alt="facebook" />
									</a>
									</li>
									<li>
										<a href="/" className="header-top-social__link">
											<img src={twitter} className="header-top__img" alt="twitter" />
										</a>
									</li>
									<li>
										<a href="/" className="header-top-social__link">
											<img src={insta} className="header-top__img" alt="insta" />
										</a>
									</li>
									<li>
										<a href="/" className="header-top-social__link">
											<img src={pinterest} className="header-top__img" alt="pinterest" />
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>

			</div>
			<div className="header__bottom">
				<div className="container">
					<div className="header-bottom__columns">
						<div className="header-bottom__column number-1">
							<div className="header-bottom__home">
								<Link to='/' className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
							</div>
						</div>
						<div className={classNames("header-bottom__column number-2", { visible: isMenuOpen })} onClick={() => toggleMenu(false)} >
							<div className='menu' data-test-id='burger-menu'>
								<ul className="header-bottom-menu__list">
									{headerNavMenu.map(item => <li key={item.id}><Link to={`/${item.link.toLowerCase()}`} className='menu-item' data-test-id={`menu-link-${item.link.toLowerCase()}`}>{item.link}</Link></li>)}
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
								<div data-test-id='cart-button' className="header-bottom__icon cartcount" onClick={() => toggleCart(!isCartOpen)}>
									<img src={shoppingbag} alt="shoppingbag" />
									<div className={classNames("shoppingcount", { visiblecount: cartCount })}>{cartCount}</div>
								</div>
								<div data-test-id='burger-menu-btn' className={classNames('burger-menu-btn', { visible: isMenuOpen })}
									onClick={toggleMenuMode}
								>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isReadyCart ? <Cart active={isCartOpen} setActive={toggleCart} /> : <></>}
		</div >
	);
}

const mapStateToProps = state => {
	return {
		cart: state.shop.cart,
	}
}

export default connect(mapStateToProps)(Header);
