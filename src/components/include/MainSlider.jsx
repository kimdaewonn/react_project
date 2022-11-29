import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

function UnsplashRan({ random }) {
  return (
    <li>
      <a href={`https://yummly2.p.rapidapi.com/categories/list/${random.id}`}>
        <img src={random.searches} alt={random.searches} />
      </a>
    </li>
  );
}

const MainSlider = ({ random }) => {
  return (
    <section className="movie__popular">
      <div className="container">
        <div className="unsplash__inner">
          <h2>Unsplash Random</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <UnsplashRan key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
