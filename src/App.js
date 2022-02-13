import { Link, HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/footer';

function App() {
	return (
		<div className='app' data-test-id='app'>
			<div div className="wrapper" >
				<Header />
				<Main />
				{/* <Footer /> */}
			</div>
		</div >
	);
}

export default App;
