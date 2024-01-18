import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Search, Filter } from "./";

import "swiper/css";

const Caroussel = () => {
  return (
    <div className="h-[600px] bg-white ">
      <Swiper loop={true} spaceBetween={0} className="h-[50%]">
        <SwiperSlide>
          <img src="/images/2.jpg" />
        </SwiperSlide>
      </Swiper>
      <Filter />
      <div className=" h-[50%]  bg-gradient-to-b from-lime-500 " />
    </div>
  );
};

export default Caroussel;
