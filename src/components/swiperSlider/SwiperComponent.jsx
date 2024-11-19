import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slideImage1 from '../../assets/images/banner1.jpeg';
import slideImage2 from '../../assets/images/banner2.jpeg';
import slideImage3 from '../../assets/images/banner3.jpeg';
import slideImage4 from '../../assets/images/banner4.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={true}>
      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute left-0 bg-minsk-800 top-0 bottom-0 w-1/2 flex items-center justify-center">
            <div className="max-w-[30rem]">
              <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl lg:leading-[3rem] font-bold text-white">
                Personalized <br /> guidance for your <br /> career
              </h3>
            </div>
          </div>
          <img
            src={slideImage1}
            alt="Slide 1"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute left-0 bg-minsk-800 top-0 bottom-0 w-1/2 flex items-center justify-center">
            <div className="max-w-[30rem]">
              <h3 className="text-xl text-white text-center sm:text-2xl md:text-4xl lg:text-5xl lg:leading-[3rem] font-bold">
                Get the right <br /> mentorship
              </h3>
            </div>
          </div>
          <img
            src={slideImage2}
            alt="Slide 2"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute left-0 bg-minsk-800 top-0 bottom-0 w-1/2 flex items-center justify-center">
            <div className="max-w-[30rem]">
              <h3 className="text-xl text-white sm:text-2xl md:text-4xl lg:text-5xl lg:leading-[3rem] font-bold">
                Find the right career path
              </h3>
            </div>
          </div>
          <img
            src={slideImage3}
            alt="Slide 1"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-h-[38rem] relative">
          <div className="absolute left-0 bg-minsk-800 top-0 bottom-0 w-1/2 flex items-center justify-center">
            <div className="max-w-[30rem]">
              <h3 className="text-xl text-white sm:text-2xl md:text-4xl lg:text-5xl lg:leading-[3rem] font-bold">
                Ace your interviews
              </h3>
            </div>
          </div>
          <img
            src={slideImage4}
            alt="Slide 1"
            className="w-full h-full object-center object-cover mix-blend-overlay"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
