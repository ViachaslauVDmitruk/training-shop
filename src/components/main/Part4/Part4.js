import './css/Part4.css';
import img01 from './img/01.jpg';
import img02 from './img/02.jpg';

function Part4() {
	return (
		< div className="Parth4" >
			<div className="container">
				<div className="parth4__columns">
					<div className="parth4-columns__column">
						<div className="parth4-column__img">
							<img src={img01} alt="img01" />
							<div className="content-items-block-link">
								<a href="#" className="content-items-item__link">
									<div className='content-link__toptext'>New season</div>
									<div className='content-link__bottomtext'>lookbook collection</div>
								</a>
							</div>
						</div>

					</div>
					<div className="parth4-columns__column">
						<div className="parth4-column__img">
							<img src={img02} alt="img01" />
							<div className="content-items-block-link">
								<a href="#" className="content-items-item__link">
									<div className='content-link__toptext'>New season</div>
									<div className='content-link__bottomtext'>Get UP to <span>50% off</span></div>
								</a>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div >
	);
}
export default Part4;