import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Slider() {
  const swiper = [
    "https://i.ytimg.com/vi/Q6ZNsHvspEg/maxresdefault.jpg",
    "https://avatar-ex-swe.nixcdn.com/song/share/2022/01/25/e/2/e/3/1643078472097.jpg",
    "https://avatar-ex-swe.nixcdn.com/song/share/2021/11/19/b/e/5/0/1637317185220.jpg",
    "https://i.ytimg.com/vi/gJHSDZfJrRY/maxresdefault.jpg",
    "https://i.ytimg.com/vi/b1UtffzfG64/maxresdefault.jpg",
    "https://i.ytimg.com/vi/GQ4F9k4USfA/maxresdefault.jpg",
    "https://i.ytimg.com/vi/FkOt19CUC30/maxresdefault.jpg",
    "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2019/7/1/741911/Hay-Trao-Cho-Anh.jpg",
  ];
  return (
    <div className="slider" >
      <Swiper
        modules={[Autoplay,Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation={true}
        loopFillGroupWithBlank={true}
        autoplay={{ delay: 2000 }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {swiper.map((item, index) => (
            
                <SwiperSlide key={index}>
                    <img src={item} className="slider-img" alt="" />
                </SwiperSlide>

            
        ))}
      </Swiper>
      </div>
  );
}

export default Slider;
