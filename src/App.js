import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import Clothes from './components/Clothes';

import { loadData } from './redux/Shopping/shopping-actions';
import Loader from './components/Loader/loader';
import Error from './components/error/Error';

import './App.css';

function App() {
	// const { isError, isLoading } = useSelector(store => store.shop);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(loadData())										get data from server
	// }, [dispatch])

	return (
		<div className='app' data-test-id='app'>
			{/* {isLoading && <Loader />}
			{isError && <Error />} */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/:type' element={<Clothes />}></Route>
				<Route path='/:type/:id' element={<ProductPage />}></Route>
			</Routes>
		</div >
	);
}

export default App;
