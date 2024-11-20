import { FaStar } from 'react-icons/fa';

const StarRatings = ({ rating }) => {
  // Helper function to render star elements based on the rating
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      // Calculate fill percentage for each star
      // Calculate the difference between the rating and the current star index
      const starValue = rating - (i - 1);
      // Ensure the value is between 0 and 1
      const clampedValue = Math.max(0, Math.min(1, starValue));
      // Convert to percentage
      const fillPercentage = clampedValue * 100;

      stars.push(
        <span key={i} className="relative text-gray-300">
          {/* Filled portion of the star */}
          <span
            className="h-6 absolute top-0 left-0 overflow-hidden text-yellow-400"
            style={{ width: `${fillPercentage}%` }}>
            <FaStar className="text-xl" />
          </span>
          {/* Background star */}
          <span className="text-gray-300">
            <FaStar className="text-xl" />
          </span>
        </span>
      );
    }

    return stars;
  };

  return (
    <div
      className="flex items-center"
      aria-label={`Rating: ${rating} out of 5`}>
      {renderStars()}
      <span className="ml-2 bg-slate-200 text-cyan-600 py-1 px-2 text-sm rounded-lg">
        {rating}
      </span>
    </div>
  );
};

export default StarRatings;
