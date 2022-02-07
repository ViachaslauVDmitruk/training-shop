import './css/header.css';
import facebook from './img/social/facebook01.svg';
import twitter from './img/social/logo-twitter01.svg';
import insta from './img/social/instagram01.svg';
import pinterest from './img/social/logo-pinterest01.svg';

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
				<div className="header__bottom"></div>

			</div>
		</div>
	);
}

export default Header;
