import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../App.css";
import { Navigation } from "swiper";
import img01 from '../main/Part1/img/01.jpg';

function SliderMain() {
	return (
		<Swiper navigation={true} modules={[Navigation]} className="content-items-item__image"
		>
			<SwiperSlide>
				<img src={img01} alt="img01" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img01} alt="img01" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img01} alt="img01" />
			</SwiperSlide>
		</Swiper>
	);
}
export default SliderMain;

