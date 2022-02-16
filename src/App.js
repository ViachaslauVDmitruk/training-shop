import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CategoriesMan from './pages/Categories/CategoriesMan';
import CategoriesWoman from './pages/Categories/CategoriesWoman';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
	return (
		<div className='app' data-test-id='app'>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/women' element={<CategoriesWoman />}></Route>
				<Route path='/men' element={<CategoriesMan />}></Route>
				<Route path='/product/:id' element={<ProductPage />}></Route>
			</Routes>
		</div >
	);
}

export default App;
