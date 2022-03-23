import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import Clothes from './components/Clothes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/Shopping/shopping-actions';
import Loader from './components/Loader/loader';
import Error from './components/error/Error';


function App() {
	const { isError, isLoading } = useSelector(store => store.shop);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<div className='app' data-test-id='app'>
			{isLoading && <Loader />}
			{isError && <Error />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/:type' element={<Clothes />}></Route>
				<Route path='/:type/:id' element={<ProductPage />}></Route>
			</Routes>
		</div >
	);
}

export default App;
