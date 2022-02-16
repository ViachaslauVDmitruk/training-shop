import { Link } from 'react-router-dom';

function FooterInformation(props) {
	return (
		<div >
			<nav className="footer-column__menu">
				<Link key={props.id} to={`/${props.link.toLowerCase()}`} className='footer-menu-item' data-test-id={`menu-link-${props.link.toLowerCase()}`}>{props.link}
				</Link>
			</nav>
		</div >
	)
}

export default FooterInformation;