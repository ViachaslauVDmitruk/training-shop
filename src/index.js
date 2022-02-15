import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import CategoriesWoman from './pages/Categories/CategoriesWoman';
// import CategoriesMan from './pages/Categories/CategoriesMan';
// import ProductPage from './pages/ProductPage/ProductPage';
import Home from './pages/Home';
// import Part1 from '../src/components/main/Part1/Part1'
// import Main from '../src/components/main/Main';


ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <CategoriesWoman /> */}
		{/* <CategoriesMan /> */}
		{/* <ProductPage /> */}
		<Home />
		{/* <Part1 /> */}
		{/* <Main /> */}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
