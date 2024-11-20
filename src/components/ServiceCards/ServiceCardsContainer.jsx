import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import LoadingSpinner from '../LoadingSpinner';

const ServiceCardsContainer = () => {
  const cardsData = useLoaderData();
  if (!cardsData) {
    return (
      <div className="max-width-wrapper flex items-center justify-center">
        <LoadingSpinner size={3} />
      </div>
    );
  }
  return (
    <div className="max-width-wrapper">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {cardsData.map((card) => (
          <ServiceCard key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardsContainer;
