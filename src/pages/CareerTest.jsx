import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CareerTest = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 1, question: 'Do you enjoy working with numbers?' },
    { id: 2, question: 'Do you prefer working in a team or independently?' },
    { id: 3, question: 'Are you comfortable with public speaking?' },
    { id: 4, question: 'Do you like solving technical problems?' },
  ];

  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-eminence-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Career Test</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {questions.map((q) => (
              <div key={q.id} className="mb-4">
                <p className="text-gray-700 font-medium">{q.question}</p>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value="Yes"
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value="No"
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="bg-eminence-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-eminence-700 transition duration-200">
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Thank you for completing the test!
            </h2>
            <p className="text-gray-600">
              Your responses have been recorded. Our team will analyze them and
              provide personalized career advice soon.
            </p>
            <p className="text-slate-800 mt-5">
              Meanwhile you can check out our services{' '}
              <Link to="/" className="text-minsk-600">
                here
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerTest;
