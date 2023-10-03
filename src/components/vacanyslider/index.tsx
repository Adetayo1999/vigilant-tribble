import { vacancySliderData } from "../../data/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Container } from "../skeleton/container";

export const VacancySlider = () => {
  return (
    <div className="py-20">
      <Container>
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          autoplay
          loop
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper  "
        >
          {[...vacancySliderData, ...vacancySliderData].map((item) => (
            <SwiperSlide
              key={item.id}
              className="!h-[15rem] !w-[15rem] overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
