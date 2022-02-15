import './css/Part6.css';
import img01 from './img/01.jpg';
import img02 from './img/02.jpg';
import img03 from './img/03.jpg';

function Part6() {
	return (
		<div className="Part6">
			<div className="container">
				<div className="part6__top">
					<div className="part6-top__title">LATEST FROM BLOG</div>
					<div className="part6-top__link">
						<a href="/" className="part6-top-link__view">see all</a>
					</div>
				</div>
				<div className="part6__columns">
					<div className="part6__column">
						<div className="part6-column__content">
							<div className="part6-column-content__image">
								<img src={img01} alt="img01" />
							</div>
						</div>
						<div className="part6-column-content__info">
							<div className="part6-info__title">The Easiest Way to Break</div>
							<div className="part6-info__text">
								<div className="part6-info-text__main">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</div>
								<div className="part6-info-text__date">
									<div className="part6-info-date__date">April 6, 2032</div>
									<div className="part-info-date__readmore">
										<a href="/" className="part6-info-readmore__link">Read more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="part6__column">
						<div className="part6-column__content">
							<div className="part6-column-content__image">
								<img src={img02} alt="img02" />
							</div>
						</div>
						<div className="part6-column-content__info">
							<div className="part6-info__title">The Easiest Way to Break</div>
							<div className="part6-info__text">
								<div className="part6-info-text__main">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</div>
								<div className="part6-info-text__date">
									<div className="part6-info-date__date">April 6, 2032</div>
									<div className="part-info-date__readmore">
										<a href="/" className="part6-info-readmore__link">Read more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="part6__column">
						<div className="part6-column__content">
							<div className="part6-column-content__image">
								<img src={img03} alt="img03" />
							</div>
						</div>
						<div className="part6-column-content__info">
							<div className="part6-info__title">The Easiest Way to Break</div>
							<div className="part6-info__text">
								<div className="part6-info-text__main">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</div>
								<div className="part6-info-text__date">
									<div className="part6-info-date__date">April 6, 2032</div>
									<div className="part-info-date__readmore">
										<a href="/" className="part6-info-readmore__link">Read more</a>
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

export default Part6;