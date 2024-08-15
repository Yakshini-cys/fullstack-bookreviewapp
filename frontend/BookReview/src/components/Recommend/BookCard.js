import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BookCard = ({ book }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
    <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg text-custom-violet mb-1">{book.title}</h3>
      <p className="text-custom-black text-sm mb-2">{book.author}</p>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faStar} className="text-custom-orange mr-1" />
        <span className="text-custom-black">{book.rating}</span>
      </div>
    </div>
  </div>
);

export default BookCard;