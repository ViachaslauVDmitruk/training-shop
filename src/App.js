// import { Link, HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import CategoriesMan from './pages/Categories/CategoriesMan';
// import CategoriesWoman from './pages/Categories/CategoriesWoman';
// import ProductPage from './pages/ProductPage/ProductPage';

function App() {
	return (
		<div className='app' data-test-id='app'>
			{/* <Router>
				<Link to="/">Home</Link>
				<Link to="/woman">woman</Link>
				<Route parth="/" component={Home}></Route>
				<Route parth="/woman" component={CategoriesWoman}></Route>
				<Route parth="/man" component={CategoriesMan}></Route>
			</Router> */}
			<Home />
		</div >
	);
}

export default App;
