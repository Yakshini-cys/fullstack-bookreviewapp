import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating';

const ReviewCard = ({ review, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-custom-violet">{review.bookTitle}</h3>
        <div className="flex space-x-2">
          <button onClick={() => onEdit(review)} className="text-custom-blue hover:text-opacity-80">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => onDelete(review.id)} className="text-custom-orange hover:text-opacity-80">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <p className="text-custom-black mt-2">{review.reviewText}</p>
      <div className="flex items-center mt-2">
        <StarRating rating={review.rating} setRating={() => {}} />
        <span className="ml-2 text-custom-black">{review.rating}/5</span>
      </div>
    </div>
  );
};

export default ReviewCard;