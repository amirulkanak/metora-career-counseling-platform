import { useCallback, useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import client2 from '../assets/images/client2.jpg';
import client3 from '../assets/images/client3.avif';
import client1 from '../assets/images/client1.jpg';

const Feedback = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <section className="mt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
        <div className="max-width-wrapper">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">Client Feedback</h2>
            <p className="m-4">
              What our clients have to say about their experience with Mentora
            </p>
          </div>
          <Swiper slidesPerView={1} ref={sliderRef}>
            <SwiperSlide>
              <SingleTestimonial
                image={client3}
                reviewImg="https://i.ibb.co.com/XzDzzy5/pngwing-com.png"
                reviewAlt="webflow"
                details="The personalized guidance I received was invaluable for my growth. I am grateful for the support and guidance I received from the team at Mentora."
                name="Alice Johnson"
                position="Chief Executive Officer."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image={client2}
                reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                reviewAlt="lineicon"
                details="The team at Mentora is very professional and knowledgeable. They helped me to identify my strengths and weaknesses and provided me with the tools to succeed."
                name="Angela Smith"
                position="Project Manager."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image={client1}
                reviewImg="https://i.ibb.co.com/McVw8Wx/fiverr.png"
                reviewAlt="Fiverr"
                details="I am very happy with the services provided by Mentora. They helped me to identify my career goals and provided me with the tools to achieve them."
                name="Mike Anderson"
                position="Full Stack Developer."
              />
            </SwiperSlide>
            <div className="absolute left-0 right-0 z-10 flex items-center justify-center gap-5 sm:bottom-0">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current">
                    <path
                      d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white transition-all hover:border-transparent hover:drop-shadow-testimonial">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current">
                    <path
                      d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Feedback;

const SingleTestimonial = ({
  image,
  reviewImg,
  reviewAlt,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <img src={image} alt="image" className="w-full" />
            <span className="absolute -left-6 -top-6 z-[-1] hidden sm:block">
              <DotShape />
            </span>
            <span className="absolute -bottom-6 -right-6 z-[-1]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                  stroke="#13C296"
                  strokeWidth="6"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <div>
              <div className="mb-7 max-w-32">
                <img src={reviewImg} alt={reviewAlt} />
              </div>

              <p className="mb-11 text-base font-normal italic leading-[1.81] text-body-color  sm:text-[22px]">
                {details}
              </p>

              <h4 className="mb-2 text-[22px] font-semibold leading-[27px] ">
                {name}
              </h4>
              <p className="text-base text-body-color ">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DotShape = () => {
  return (
    <>
      <svg
        width="77"
        height="77"
        viewBox="0 0 77 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="1.66343"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 1.66343 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 1.66343 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 16.3016 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 16.3016 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 30.9398 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 30.9398 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 45.578 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 45.578 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 60.2162 74.5216)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 74.6634 74.5216)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 60.2162 30.9398)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 74.6634 30.9398)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 1.66343 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 1.66343 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 16.3016 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 16.3016 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 30.9398 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 30.9398 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 45.578 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 45.578 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 60.2162 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 74.6634 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 60.2162 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 74.6634 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 1.66343 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 1.66343 1.66342)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 16.3016 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 16.3016 1.66342)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 30.9398 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 30.9398 1.66342)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 45.578 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="1.66344"
          r="1.66343"
          transform="rotate(-90 45.578 1.66344)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="45.2458"
          r="1.66343"
          transform="rotate(-90 60.2162 45.2458)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="45.2458"
          r="1.66343"
          transform="rotate(-90 74.6634 45.2458)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 60.2162 1.66371)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 74.6634 1.66371)"
          fill="#3056D3"
        />
      </svg>
    </>
  );
};
