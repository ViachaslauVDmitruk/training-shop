import './main.css';
import Part1 from './Part1/Part1';
import Part2 from './Part2/Part2';
import Part4 from './Part4/Part4';
import Part5 from './Part5/Part5';
import Part6 from './Part6/Part6';
import ClothesWoman from './ClothesType/Woman';
import ClothesMan from './ClothesType/Man';

function Main() {
	return (
		<div className="main">
			<Part1 />
			<Part2 />
			<ClothesWoman />
			<ClothesMan />
			<Part4 />
			<Part5 />
			<Part6 />
		</div>
	);
}

export default Main;