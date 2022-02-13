import './css/Part1.css';
import img01 from './img/01.jpg';
import img02 from './img/02.jpg';
import img03 from './img/03.jpg';
import img04 from './img/04.jpg';
import arrL from './img/ArrowL.png';
import arrR from './img/ArrowR.png';

function Part1() {
	return (
		<div className="container">
			<section className="content">
				<div className="content__items">
					<div className="content-items__item content-items__item_big">
						<div className="content-items-item__image">
							<img src={img01} alt="img01" />
							<div className="content-slider">
								<div className="content-items-item__slider">
									{/* <div className="content-block__arrow">
											<img src={arrL} alt="arrL" />
										</div> */}
									<div className="content-items-item-slider__content">
										<div className="content-items-item-link__title">BUNNER</div>
										<div className="content-items-item-link__text">YOUR TITLE TEXT</div>
									</div>
									{/* <div className="content-block__arrow">
										<img src={arrR} alt="arrR" />
									</div> */}
								</div>
							</div>
						</div>
					</div>

					<div className="content-items__item">
						<div className="content-items__columns">

							<div className="content-column__item">
								<div className="content-column-item__little">
									<div className="content-column-item-little__image">
										<img src={img02} alt="img02" />
										<div className="content-items-block-link">
											<a href="#" className="content-items-item__link">Woman</a>
										</div>
									</div>
								</div>

								<div className="content-column-item__little">
									<div className="content-column-item-little__image">
										<img src={img03} alt="img03" />
										<div className="content-items-block-link">
											<a href="#" className="content-items-item__link">Men</a>
										</div>
									</div>
								</div>
							</div>

							<div className="content-column__middle">
								<img src={img04} alt="img04" />
								<div className="content-items-block-link">
									<a href="#" className="content-items-item__link">Accessories</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</div>
	);
}

export default Part1;