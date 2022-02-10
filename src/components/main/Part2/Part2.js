import './css/Part2.css';
import iconTruck from './img/truck01.svg';
import refresh from './img/refresh01.svg';
import supporticon from './img/support01.svg';

const advantage = [
	{
		id: "1",
		title: "FREE SHIPPING",
		text: "On all UA order or order above $100",
		imgScr: iconTruck,
		name: "truck",
	},
	{
		id: "2",
		title: "30 DAYS RETURN",
		text: "Simply return it within 30 days for an exchange",
		imgScr: refresh,
		name: "refresh",
	},
	{
		id: "3",
		title: "SUPPORT 24/7",
		text: "Contact us 24 hours a day, 7 days a week",
		imgScr: supporticon,
		name: "support",
	},
]

function Part2() {
	return (
		<section className="advantage">
			<div className="container">
				<div className="advantage__menu">
					<nav className="advantage-menu__list">
						<ul className='adventage-menu__items'>
							{advantage.map(item => <li key={item.id}>
								<div className="advantage-menu-items__icon">
									<img src={item.imgScr} alt="" />
								</div>
								<div className="advantage-menu-items__columns">
									<div className="advantage-column__title">
										{item.title}
									</div>
									<div className="advantage-column__text">
										{item.text}
									</div>
								</div>
							</li>)}
						</ul>
					</nav>
				</div>
			</div>
		</section>
	);
}

export default Part2;