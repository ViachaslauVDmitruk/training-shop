import { Link, HashRouter as Router, Route } from 'react-router-dom';
function FooterCategories(props) {
	return (

		<Router>
			<div >

				<nav className="footer-column__menu">
					<Link key={props.id} to={`/${props.link}`} className='footer-menu-item' data-test-id={`menu-link-${props.link}`}>{props.link}
					</Link>
				</nav>
			</div >
		</Router>
	)
}

export default FooterCategories;