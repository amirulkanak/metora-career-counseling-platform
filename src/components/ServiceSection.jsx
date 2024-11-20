import ServiceCardsContainer from './ServiceCards/ServiceCardsContainer';

const ServiceSection = () => {
  return (
    <section className="max-width-wrapper mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Your Personalized Career Journey Starts Here
        </h2>
        <p className="m-4">
          Explore our services and find the right counselor to help you achieve
          your career goals.
        </p>
      </div>

      {/* Cards Container */}
      <ServiceCardsContainer />
    </section>
  );
};

export default ServiceSection;
