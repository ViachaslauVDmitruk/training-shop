import './css/footer.css';
import FooterCategories from './FooterCategories';
import FooterInformation from './FooterInformation';
import FooterUseFull from './FooterUseFull';
import FooterContactUs from './FooterContactUs';

import facebook from '../Header/img/social/facebook01.svg';
import twitter from '../Header/img/social/logo-twitter01.svg';
import insta from '../Header/img/social/instagram01.svg';
import pinterest from '../Header/img/social/logo-pinterest01.svg';

import img01 from './img/01.png';
import img02 from './img/02.png';
import img03 from './img/03.png';
import img04 from './img/04.png';
import img05 from './img/05.png';
import img06 from './img/06.png';
import img07 from './img/07.png';

import imgcontact01 from './img/contact/01.png';
import imgcontact02 from './img/contact/02.png';
import imgcontact03 from './img/contact/03.png';
import imgcontact04 from './img/contact/04.png';

const imageLogo = [
	{ logo: img01, },
	{ logo: img02, },
	{ logo: img03, },
	{ logo: img04, },
	{ logo: img05, },
	{ logo: img06, },
	{ logo: img07, },
]
const footerLinksCategories = [
	{
		id: "1",
		link: "Men"
	},
	{
		id: "2",
		link: "Women"
	},
	{
		id: "3",
		link: "Accessories"
	},
	{
		id: "4",
		link: "Beauty"
	},
]

const footerLinksInformation = [
	{
		id: "5",
		link: "About us"
	},
	{
		id: "6",
		link: "Contact us"
	},
	{
		id: "7",
		link: "Blog"
	},
	{
		id: "8",
		link: "FAQs"
	},
]
const footerLinksUseful = [
	{
		id: "9",
		link: "Terms & Conditions"
	},
	{
		id: "10",
		link: "Returns & Exchanges"
	},
	{
		id: "11",
		link: "Shipping & Delivery"
	},
	{
		id: "12",
		link: "Privacy Policy"
	},
]
const footerContactUs = [
	{
		id: "13",
		image: imgcontact01,
		link: "Belarus, Gomel, Lange 17",
	},
	{
		id: "14",
		image: imgcontact02,
		link: "+375 29 100 20 30",
	},
	{
		id: "15",
		image: imgcontact03,
		link: "All week 24/7",
	},
	{
		id: "16",
		image: imgcontact04,
		link: "info@clevertec.ru",
	},
]
function Footer() {
	return (
		<div className='footer' data-test-id='footer'>
			<div className="footer__top">
				<div className="container">
					<div className="footer-top__columns">
						<div className="footer-top__title">BE IN TOUCH WITH US:</div>
						<div className="footer-top__form">
							<div className="footer-top-form__input">
								<input autoComplete="off" type="text" name="form[]" placeholder="Enter your email"
									className="footer__input" />
							</div>
							<div className="footer-top__button">
								<button type="submit" className="footer-button__btn">Join  us</button>
							</div>
						</div>
						<nav className="footer-top__social">
							<ul className='footer-top-social__list'>
								<li><a href="/" className="footer-top-social__link">
									<img src={facebook} className="footer-top__img" alt="facebook" />
								</a>
								</li>
								<li>
									<a href="/" className="footer-top-social__link">
										<img src={twitter} className="footer-top__img" alt="twitter" />
									</a>
								</li>
								<li>
									<a href="/" className="footer-top-social__link">
										<img src={insta} className="footer-top__img" alt="insta" />
									</a>
								</li>
								<li>
									<a href="/" className="footer-top-social__link">
										<img src={pinterest} className="footer-top__img" alt="pinterest" />
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="footer__center">
				<div className="container">
					<div className="footer-center__columns">
						<div className="footer-center__column">
							<div className="footer-column__title">Categories</div>
							{footerLinksCategories.map(item => <FooterCategories key={item.id} id={item.id} link={item.link} />)}
						</div>
						<div className="footer-center__column">
							<div className="footer-column__title">Information</div>
							{footerLinksInformation.map(item => <FooterInformation key={item.id} id={item.id} link={item.link} />)}
						</div>
						<div className="footer-center__column">
							<div className="footer-column__title">Information</div>
							{footerLinksUseful.map(item => <FooterUseFull key={item.id} id={item.id} link={item.link} />)}
						</div>
						<div className="footer-center__column">
							<div className="footer-column__title">Information</div>
							{footerContactUs.map(item => <FooterContactUs key={item.id} id={item.id} link={item.link} img={item.image} />)}
						</div>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="container">
					<div className="footer-bottom__columns">
						<div className="footer-bottom__column">
							Copyright © 2032 all rights reserved
						</div>
						<div className="footer-bottom__column">
							<div className="footer-bottom-columns__logo">
								{imageLogo.map(item => <div key={item.logo} className="fotter-bottomn__image">
									<img src={item.logo} alt="logo" />
								</div>)}
							</div>
						</div>
						<div className="footer-bottom__column">
							<a href="Clevertec.ru/training" className="footer-bottom__link">Clevertec.ru/training</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;