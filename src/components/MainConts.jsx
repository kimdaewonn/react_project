import React from "react";

const MainConts = () => {
  return (
    <section className="slider__wrap">
      <div className="slider__inner">
        <div className="slider__box">
          <h2>Today's Recommended Recipe~</h2>
          {/* <Swiper
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
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default MainConts;
