import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BookOfTheDay = ({ book }) => (
  <div className="bg-gradient-to-r from-custom-purple to-custom-blue rounded-lg shadow-lg p-6 mb-8">
    <h2 className="text-2xl font-bold text-white mb-4">Book of the Day</h2>
    <div className="flex flex-col md:flex-row items-center">
      <img src={book.coverImage} alt={book.title} className="w-48 h-64 object-cover rounded-md shadow-md mb-4 md:mb-0 md:mr-6" />
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
        <p className="text-custom-beige mb-2">{book.author}</p>
        <p className="text-white mb-4">{book.description}</p>
        <button className="bg-white text-custom-violet px-4 py-2 rounded-full hover:bg-opacity-90 transition flex items-center">
          Read More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);

export default BookOfTheDay;