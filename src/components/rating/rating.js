import starY from './img/starYellow.png';
import starG from './img/starGrey.png';

let arrStars = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
]
function Rating(props) {
	return (
		<div className='rating-block'>
			{arrStars.map(item => <li key={item.id} >
				<img src={item.id <= props.ratingProps ? starY : starG} alt="starImg" />
			</li>)}
		</div>
	)
}
export default Rating;