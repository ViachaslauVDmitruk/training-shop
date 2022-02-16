import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage/ProductPage';
import Clothes from './components/Clothes';

function App() {
	return (
		<div className='app' data-test-id='app'>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/:type' element={<Clothes />}></Route>
				{/* <Route path='/women' element={<CategoriesWoman />}></Route> */}
				{/* <Route path='/men' element={<CategoriesMan />}></Route> */}
				<Route path='/:type/:id' element={<ProductPage />}></Route>
			</Routes>
		</div >
	);
}

export default App;
