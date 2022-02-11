import { Link, HashRouter as Router, Route } from 'react-router-dom';



function FooterContactUs(props) {
	return (

		<Router>
			<div >

				<nav className="footer-column__menu">
					<div className='footer-column-menu__items'>
						<div className="footer-column-menu-item__image">
							<img src={props.img} alt="" />
						</div>
						<Link key={props.id} to={`/${props.link}`} className='menu-item' data-test-id={`menu-link-${props.linl}`}>{props.link}
						</Link>
					</div>
				</nav>
			</div >
		</Router>
	)
}

export default FooterContactUs;