import imgStar from './img/star.svg';
import './css/review.css';
import { useState } from 'react';

function Review() {
	// const [isOpen, setIsOpen] = useState(false);


	return (
		<div className="review">
			<div className="review-form">
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
					<input type="text" name="name" placeholder="Enter your name" />
				</div>
				<div className='review-input-text'>
					<input type="textarea" name="text" placeholder="Enter your review" />
				</div>
				<button className='review-sendbutton'> Send</button>
			</div>
		</div>
	)
}

export default Review;