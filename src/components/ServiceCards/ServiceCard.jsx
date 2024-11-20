import { Link } from 'react-router-dom';

const ServiceCard = ({ cardData }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden border border-minsk-100">
      <img
        src={cardData.image}
        alt={cardData.service_name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">
          {cardData.service_name}
        </h2>
        <p className="text-sm text-gray-600 mt-2">By: {cardData.counselor}</p>
        <p className="text-sm text-gray-600 mt-1">
          Category: <span className="font-medium">{cardData.category}</span>
        </p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-800">
            ${cardData.pricing}
          </p>
          <Link
            to={`/service/${cardData.id}`}
            className="px-4 py-2 bg-eminence-600 text-white rounded hover:bg-eminence-700 transition">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
