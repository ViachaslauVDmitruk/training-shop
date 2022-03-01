import { useState } from "react";

function Filter() {
	const [isMenuOpen, toggleMenu] = useState(false);
	function toggleMenuMode() {
		toggleMenu(!isMenuOpen);
	}
	return (
		<div className="wrapper">
			<div className="container">
				<div className="filter-main">
					<div className="filter-main-columns">
						<div className="filter-main-columns__column">
							<div className="filter-main-column__title">
								Color
							</div>
							<div className="filter-main__items">
								<div className="filter-main-items__item">

								</div>
							</div>
						</div>
						<div className="filter-main-columns__column">
							<div className="filter-main-column__title">
								Size
							</div>
							<div className="filter-main__items">
								<div className="filter-main-items__item">

								</div>
							</div>
						</div>
						<div className="filter-main-columns__column">
							<div className="filter-main-column__title">
								Brand
							</div>
							<div className="filter-main__items">
								<div className="filter-main-items__item">

								</div>
							</div>
						</div>
						<div className="filter-main-columns__column">
							<div className="filter-main-column__title">
								Prise
							</div>
							<div className="filter-main__items">
								<div className="filter-main-items__item">

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;