import "../../App.css";
import "./css/SliderProduct.css"
import "./css/SliderProduct.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import img01 from './img/imagebig.jpg';
import arrowsliderup from '../..//pages/img/arrowsliderup.png';
import arrowsliderdown from '../../pages/img/arrowsliderdown.png';
import { getItem } from "../../products";
import { useParams } from "react-router-dom";

function SliderProduct() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	let { type, id } = useParams();
	let items = getItem(type, id);
	return (
		<>
			<div className="product-image__column big">
				<Swiper
					data-test-id='prodct-slider'
					style={{
						"--swiper-navigation-color": "#121212",
						"--swiper-pagination-color": "#121212",
					}
					}
					spaceBetween={10}
					navigation={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className="product-page mySwiper2"
				>
					{items.images.map(item => <SwiperSlide key={item.id}><img src={`https://training.cleverland.by/shop${item.url}`} alt="imgCard" /></SwiperSlide>)}
				</Swiper>
			</div>
			<div className="product-image__column left">
				<div className="product-image-slider-vertical__arrows">
					<div className="vertical-arrows-up">
						<img src={arrowsliderup} alt="arrowsliderup" />
					</div>
					<div className="vertical-arrows-down">
						<img src={arrowsliderdown} alt="arrowsliderdown" />
					</div>
				</div>
				<div className="product-vertical">
					<Swiper
						direction={"vertical"}
						onSwiper={setThumbsSwiper}
						spaceBetween={16}
						slidesPerView={4}
						freeMode={true}
						navigation={{
							nextEl: '.vertical-arrows-up',
							prevEl: '.vertical-arrows-down',
						}}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper"
					>
						{items.images.map(item => <SwiperSlide key={item.id}><img src={`https://training.cleverland.by/shop${item.url}`} alt="imgCard" /></SwiperSlide>)}
						{/* <SwiperSlide>
							<img src={img01} alt="img01" />
						</SwiperSlide> */}
						{/* <SwiperSlide>
							<img src={img01} alt="img01" />
						</SwiperSlide> */}
						{/* <SwiperSlide>
							<img src={img01} alt="img01" />
						</SwiperSlide> */}
						{/* <SwiperSlide>
							<img src={img01} alt="img01" />
						</SwiperSlide> */}
						{/* <SwiperSlide>
							<img src={img01} alt="img01" />
						</SwiperSlide> */}
					</Swiper>
				</div>
			</div>
		</>
	);
}

export default SliderProduct;