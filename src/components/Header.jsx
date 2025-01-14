import SwiperComponent from './swiperSlider/SwiperComponent';

const Header = () => {
  return (
    <header className="pb-16 bg-eminence-100 -mt-2">
      <section data-aos="fade-up" className="max-width-wrapper pt-16">
        <h1 className="text-center text-6xl sm:text-[4.5rem] leading-[5rem] font-normal">
          Your [<span className="text-eminence-700 font-light">Career</span>],
          Our Mission
        </h1>
        <p className="text-xl mt-5 text-center">
          Shape Your Future with Mentora&apos;s extensive counseling and
          guidance
        </p>
      </section>

      <section data-aos="fade-up" className="max-width-wrapper mt-12">
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-clip">
          <SwiperComponent />
        </div>
      </section>
    </header>
  );
};

export default Header;
