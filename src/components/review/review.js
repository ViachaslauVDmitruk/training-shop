import imgStar from './img/star.svg';
import './css/review.css';

function Review({ active, setActive }) {

	return (
		<div className="review" onClick={() => setActive(false)}>
			<div className="review-form" onClick={e => e.stopPropagation()}>
				<div className="review-title">Write a review</div>
				<div className="review-rating">
					<ul className="review-rating__star">
						<li>
							<img src={imgStar} alt="amgStar" />
						</li>
						<li>
							<img src={imgStar} alt="amgStar" />
						</li>
						<li>
							<img src={imgStar} alt="amgStar" />
						</li>
						<li>
							<img src={imgStar} alt="amgStar" />
						</li>
						<li>
							<img src={imgStar} alt="amgStar" />
						</li>
					</ul>
				</div>
				<div className='review-input-name'>
					<input type="text" id="name" name="name" placeholder="Enter your name" />
				</div>
				<div className='review-input-text'>
					<input type="text" id="text" name="text" placeholder="Enter your review" />
				</div>
				<button className='review-sendbutton'> Send</button>
			</div>
		</div>
	)
}

export default Review;