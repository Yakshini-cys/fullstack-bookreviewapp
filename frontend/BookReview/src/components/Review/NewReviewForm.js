import React, { useState } from 'react';
import StarRating from './StarRating';

const NewReviewForm = ({ onSubmit }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ bookTitle, reviewText, rating });
    setBookTitle('');
    setReviewText('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-custom-violet">Add New Review</h2>
      <div className="mb-4">
        <label htmlFor="bookTitle" className="block text-custom-black mb-2">Book Title</label>
        <input
          type="text"
          id="bookTitle"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          className="w-full p-2 border border-custom-beige rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reviewText" className="block text-custom-black mb-2">Your Review</label>
        <textarea
          id="reviewText"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full p-2 border border-custom-beige rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-custom-black mb-2">Rating</label>
        <StarRating rating={rating} setRating={setRating} />
      </div>
      <button type="submit" className="bg-custom-violet text-white px-4 py-2 rounded hover:bg-opacity-90 transition">
        Submit Review
      </button>
    </form>
  );
};

export default NewReviewForm;