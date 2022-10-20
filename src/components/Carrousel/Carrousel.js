import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrousel";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-1 h-auto"
      >
        <SwiperSlide>

          
          
          <img
            src="https://cdn.wallpapersafari.com/45/84/TZ03qW.jpg"
            alt=""
          />

        </SwiperSlide>
        <SwiperSlide>

          <img
            src="https://dailyspin.id/wp-content/uploads/2020/12/Valorant-Agent-14-scaled.jpg"
            alt=""
          />

        </SwiperSlide>
        <SwiperSlide>

          <img
            src="https://wallpapercave.com/wp/wp6301424.png"
            alt=""
          />

        </SwiperSlide>
      </Swiper>
    </>
  );
}