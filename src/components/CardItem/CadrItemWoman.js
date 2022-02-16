import { Link } from 'react-router-dom';
import '../main/Part3/css/Part3.css'
import starYellow from '../main/Part3/img/icons/starYellow.png';
import starGrey from '../main/Part3/img/icons/starGrey.png';
import cardwoman01 from '../main/Part3/img/woman/01.jpg';
import cardwoman02 from '../main/Part3/img/woman/02.jpg';
import cardwoman03 from '../main/Part3/img/woman/03.jpg';
import cardwoman04 from '../main/Part3/img/woman/04.jpg';
import cardwoman05 from '../main/Part3/img/woman/05.jpg';
import cardwoman06 from '../main/Part3/img/woman/06.jpg';
import cardwoman07 from '../main/Part3/img/woman/07.jpg';
import cardwoman08 from '../main/Part3/img/woman/08.jpg';
import ClothesWoman from '../main/ClothesType/Woman';

const cardWoman = [
	{
		id: 1,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman01,

	},
	{
		id: 2,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman02,
	},
	{
		id: 3,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman03,
	},
	{
		id: 4,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman04,
	},
	{
		id: 5,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman05,
	},
	{
		id: 6,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman06,
	},
	{
		id: 7,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman07,
	},
	{
		id: 8,
		title: "Women's tracksuit Q109",
		cost: "$ 30.00",
		imgCard: cardwoman08,
	},
]

function CardItemWoman() {
	return (

		<div>
			{cardWoman.map(item => <Link key={item.id} to={`/product/${item.id}`} className="cards-item" data-test-id={`clothes-card-${ClothesWoman}`}>
				<div className="parth3-item__img">
					<img src={item.imgCard} alt="imgCard" />
				</div>
				<div className="parth3-item__title">{item.title}</div>s
				<div className="parth3-item__box">
					<div className="parth3-item-box__cost">{item.cost}</div>
					<div className="parth3-item-box__grade">
						<img src={starYellow} alt="starYellow" />
						<img src={starYellow} alt="starYellow" />
						<img src={starYellow} alt="starYellow" />
						<img src={starYellow} alt="starYellow" />
						<img src={starGrey} alt="starGrey" />
					</div>
				</div>
			</Link>)}
		</div>

	)
}

export default CardItemWoman;