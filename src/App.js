import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import Clothes from './components/Clothes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/Shopping/shopping-actions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])
	// const PRODUCTS = useSelector(store => store.shop.products)

	return (
		<div className='app' data-test-id='app'>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/:type' element={<Clothes />}></Route>
				<Route path='/:type/:id' element={<ProductPage />}></Route>
			</Routes>
		</div >
	);
}

export default App;
