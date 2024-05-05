import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import ReactStars from "react-rating-stars-component";

const Testmonial = () => {
  return (
    <div className="container-fluid testimonial" id="Testmonial">
      <h2 className="h2_main text-center">
        What Our <span>Clients</span> Say!
      </h2>
      <p className="text-center p_main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ducimus.
      </p>
      <div className="test_main pt-5">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div
              className="swiper-slide swiper-slide-active"
              style={{ width: "1325px" }}
            >
              <div
                className="row gx-0 aos-init aos-animate"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="testimonial_col">
                    <img
                      src="https://media.istockphoto.com/id/1139114187/photo/man-in-bright-red-shirt-and-glasses-smiling-and-looking-off-camera.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=El2HLw58AWoAzoVbmDApDAvxW5gNsXe2FCROTKcS33g="
                      alt=""
                    />
                    <h4 className="pt-4">Sarah K., CEO</h4>
                    <div className="stars py-2">
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                      />
                    </div>
                    <p className="pt-2">
                      I used to feel lost and discouraged with my fitness goals.
                      I tried every fad diet and workout routine, but nothing
                      seemed to work. Then I found created a personalized plan
                      that actually fit my lifestyle and preferences. Within
                      months, I lost weight, gained muscle, and most
                      importantly, I finally feel confident and empowered in my
                      own body.
                    </p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="row gx-0 aos-init aos-animate"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="testimonial_col">
                  <img
                    src="https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg"
                    alt=""
                  />
                  <h4 className="pt-4">Jhon Due</h4>
                  <div className="stars py-2">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                    />
                  </div>
                  <p className="pt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum dignissimos quibusdam, et quae libero facere corporis,
                    debitis, vel voluptatem culpa nesciunt veniam! Dicta facilis
                    recusandae eligendi officia magnam nisi, laborum odio quod
                    harum alias minus ipsam, autem unde laudantium doloribus?
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="row gx-0 aos-init aos-animate"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="testimonial_col">
                  <img
                    src="https://thumbs.dreamstime.com/b/close-up-photo-cheerful-positive-attractive-black-man-whitened-teeth-looking-you-smile-face-isolated-vivid-163079354.jpg"
                    alt=""
                  />
                  <h4 className="pt-4">Jhon Due</h4>
                  <div className="stars py-2">
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                    />
                  </div>
                  <p className="pt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Earum dignissimos quibusdam, et quae libero facere corporis,
                    debitis, vel voluptatem culpa nesciunt veniam! Dicta facilis
                    recusandae eligendi officia magnam nisi, laborum odio quod
                    harum alias minus ipsam, autem unde laudantium doloribus?
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testmonial;
