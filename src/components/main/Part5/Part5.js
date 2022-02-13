import './css/Part5.css';
import img01 from './img/01.png';
import img02 from './img/02.png';

function Part5() {
	return (
		<div className="Parth5">
			<div className="parth5__center">
				<div className="parth5-center__columns">
					<div className="center-column__toptext">Special Offer</div>
					<div className="center-column__offer">Subscribe
						<br />
						And <span>Get 10% Off</span>
					</div>
					<div className="center-column__form">
						<input autocomplete="off" type="text" name="form[]" placeholder="Enter your email"
							className="input" />
					</div>
					<div className="center-column__button">
						<button type="submit" class="center-column-button__btn">Subscribe</button>
					</div>
				</div>
				<div className="parth5-images__item item_woman">
					<img src={img01} alt="img01" />
				</div>
				<div className="parth5-images__item item_man">
					<img src={img02} alt="img02" />
				</div>
			</div>
		</div>
	);
}

export default Part5;