import ServiceCardsContainer from './ServiceCards/ServiceCardsContainer';

const ServiceSection = () => {
  return (
    <section className="max-width-wrapper mt-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Client Feedback</h2>
        <p className="m-4">
          What our clients have to say about their experience with Mentora
        </p>
      </div>

      {/* Cards Container */}
      <ServiceCardsContainer />
    </section>
  );
};

export default ServiceSection;
