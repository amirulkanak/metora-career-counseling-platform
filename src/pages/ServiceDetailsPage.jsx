import { useEffect, useState } from 'react';
import StarRatings from '../components/StarRatings';
import { useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ServiceDetailsPage = () => {
  document.title = 'Service Details | Mentora';
  const [cardData, setCardData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const cardsData = useLoaderData();
  const { serviceCard_id } = useParams();

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // find the service card data based on the id
    const foundData = cardsData.find(
      (card) => card.id === Number(serviceCard_id)
    );
    setCardData(foundData);
  }, [cardsData, serviceCard_id]);

  const handleCommentSubmit = () => {
    if (newComment.trim() === '') {
      setError('Please write a comment before submitting.');
      return;
    }

    if (newComment.trim() !== '') {
      setError(null);
      const currentTime = new Date().toLocaleString();
      setComments([
        ...comments,
        { text: newComment, time: currentTime, user: user.displayName },
      ]);
      setNewComment('');
    }
  };

  if (!cardData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="pb-16 bg-eminence-100 -mt-2 min-h-[80rem]">
      <div className="max-width-wrapper mt-20">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
          <img
            src={cardData.image}
            alt={cardData.service_name}
            className="w-full h-64 object-cover rounded"
          />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            {cardData.service_name}
          </h1>
          <p className="text-gray-600 mt-2">
            <strong>Counselor:</strong> {cardData.counselor}
          </p>
          <p className="text-gray-600 mt-1">
            <strong>Category:</strong> {cardData.category}
          </p>
          <p className="text-gray-600 mt-1">
            <strong>Pricing:</strong> ${cardData.pricing}
          </p>
          <p className="text-gray-600 mt-1">
            <strong>Date:</strong> {cardData.date}
          </p>
          <p className="text-gray-600 mt-1">
            <strong>Duration:</strong> {cardData.duration}
          </p>
          <div className="text-gray-600 mt-1 flex items-center gap-2">
            <strong>Ratings:</strong> <StarRatings rating={cardData.rating} />
          </div>
          <p className="text-gray-600 mt-4">{cardData.description}</p>

          {/* Comment Input */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Give Your Feedback
            </h2>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full mt-2 p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"></textarea>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              onClick={handleCommentSubmit}
              className="mt-2 px-4 py-2 bg-eminence-600 text-white rounded hover:bg-eminence-700 transition">
              Submit Feedback
            </button>
          </div>

          {/* Display Comments */}
          {comments.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Feedbacks:
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-3">
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="p-3 bg-minsk-100/50 rounded shadow-sm text-gray-700">
                    <p className="font-semibold">{comment.user}</p>
                    <p className="text-sm">{comment.text}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Date: {comment.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;
