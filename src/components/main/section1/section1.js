import './css/section1.css';
import img01 from './img/01.jpg';
import img02 from './img/02.jpg';
import img03 from './img/03.jpg';
import img04 from './img/04.jpg';
import arrL from './img/ArrowL.png';
import arrR from './img/ArrowR.png';

function Section1() {
	return (
		<div className="wrapper">
			<div className="container">
				<section className="content">
					<div className="content__items">
						<div className="content-items__item content-items__item_big">
							<div className='content-items-item__img'>
								<img src={img01} alt="img01" />
							</div>
							<div className="content-items-item__slider">
								<div className="content-block__arrow">
									<img src={arrL} alt="arrL" />
								</div>
								<div className="content-items-item-slider__content">
									<div className="content-items-item-link__title">BUNNER</div>
									<div className="content-items-item-link__text">YOUR TITLE TEXT</div>
								</div>
								<div className="content-block__arrow">
									<img src={arrR} alt="arrR" />
								</div>
							</div>
						</div>
						<div className="content-items__item">
							<div className='content-items-item__img'>
								<img src={img02} alt="img02" />
							</div>
							<a href="" className="content-items-item__link">WOMAN</a>
						</div>
						<div className="content-items__item">
							<div className='content-items-item__img'>
								<img src={img03} alt="03" />
							</div>
							<a href="" className="content-items-item__link">MAN</a>
						</div>
						<div className="content-items__item content-items__item_medium">
							<div className='content-items-item__img'>
								<img src={img04} alt="img04" />
							</div>
							<a href="" className="content-items-item__link">Accessories</a>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Section1;