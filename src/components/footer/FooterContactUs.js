import { Link } from 'react-router-dom';

function FooterContactUs(props) {
	return (
		<div >
			<nav className="footer-column__menu">
				<div className='footer-column-menu__items'>
					<div className="footer-column-menu-item__image">
						<img src={props.img} alt="img" />
					</div>
					<Link key={props.id} to={`/${props.link}`} className='footer-menu-item' data-test-id={`menu-link-${props.link}`}>{props.link}
					</Link>
				</div>
			</nav>
		</div >
	)
}

export default FooterContactUs;