import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";

import "./css/SliderRelated.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderRelated(props) {
	let { type } = useParams();
	let related = useSelector(store => store.shop.products[type]);

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
					{related?.map(item => <SwiperSlide key={item.id} id={item.id}>
						<div className="card-slider">
							<CardItem productType={type} key={item.id} id={item.id} name={item.name} cost={item.price} imgCard={item.images[0].url} discount={item.discount} rating={item.rating} />
						</div>
					</SwiperSlide>)}
				</Swiper>
			</div>
		</>
	);
}
export default SliderRelated;