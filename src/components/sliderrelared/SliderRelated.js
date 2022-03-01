import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/SliderRelated.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
// import { getItemsByType } from "../../clothes";
import { useParams } from "react-router-dom";
import starYellow from '../main/Part3/img/icons/starYellow.png';
import starGrey from '../main/Part3/img/icons/starGrey.png';
import { getItemsByType } from "../../products";

function SliderRelated(props) {
	let { type } = useParams();
	let related = getItemsByType(type).slice(0, 8);
	return (
		<>
			<div className="slider-related-box" >
				<Swiper
					data-test-id='related-slider'
					spaceBetween={10}
					slidesPerView={1}
					modules={[Navigation]}
					navigation={{
						nextEl: '.line-arrows__image.next',
						prevEl: '.line-arrows__image.prev',
					}}


					breakpoints={{
						370: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						740: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						960: {
							slidesPerView: 4,
							spaceBetween: 30
						}
					}}

					className="mySwiperRelated">
					{related.map(item => <SwiperSlide key={item.id} id={item.id}>
						<div className="card-slider">
							<div className="card-item__image">
								<img src={`https://training.cleverland.by/shop${item.images[0].url}`} alt="imgCard" />
							</div>
							<div className="parth3-item__title">{item.title}</div>
							<div className="parth3-item__box">
								<div className="parth3-item-box__cost">{item.cost}</div>
								<div className="parth3-item-box__grade">
									<img src={starYellow} alt="starYellow" />
									<img src={starYellow} alt="starYellow" />
									<img src={starYellow} alt="starYellow" />
									<img src={starYellow} alt="starYellow" />
									<img src={starGrey} alt="starGray" />
								</div>
							</div>
						</div>
					</SwiperSlide>)}

				</Swiper>
			</div>

		</>

	);
}
export default SliderRelated;