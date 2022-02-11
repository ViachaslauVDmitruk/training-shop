import { Link, HashRouter as Router, Route } from 'react-router-dom';
function FooterInformation(props) {
	return (

		<Router>
			<div >

				<nav className="footer-column__menu">
					<Link key={props.id} to={`/${props.link}`} className='menu-item' data-test-id={`menu-link-${props.linl}`}>{props.link}
					</Link>
				</nav>
			</div >
		</Router>
	)
}

export default FooterInformation;