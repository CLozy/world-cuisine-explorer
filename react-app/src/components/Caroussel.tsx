import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Caroussel = () => {
  return (
    <div className="h-[160px] bg-lime-100">
      <Swiper loop={true} spaceBetween={0} className="h-[50%]">
        <SwiperSlide>
          <img src="/images/1.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Caroussel;
