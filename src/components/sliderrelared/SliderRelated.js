import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { getItemsByType } from "../../clothes";
import { useParams } from "react-router-dom";
import starYellow from '../main/Part3/img/icons/starYellow.png';
import starGrey from '../main/Part3/img/icons/starGrey.png';

function SliderRelated(props) {
	let { type } = useParams();
	let related = getItemsByType(type).slice(0, 8);
	return (

		<div className="slider-related">
			<Swiper
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1140: {
						slidesPerView: 4,
						spaceBetween: 30,
					}
				}}
				spaceBetween={30}
				slidesPerView={4}
				modules={[Navigation]}
				navigation={{
					nextEl: '.line-arrows__image.next',
					prevEl: '.line-arrows__image.prev',
				}}
				className="slider-ralated">
				{related.map(item => <SwiperSlide key={item.id} id={item.id}>
					<div className="parth3-item__img">
						<img src={item.imgCard} alt="imgCard" />
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
	);
}
export default SliderRelated;