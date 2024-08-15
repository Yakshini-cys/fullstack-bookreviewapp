import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookShelf = ({ title, books, icon }) => (
  <div className="bg-custom-black bg-opacity-80 rounded-lg shadow-md p-4 mb-4">
    <h3 className="text-lg font-bold text-custom-beige mb-3 flex items-center">
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {books.map((book) => (
        <div key={book.id} className="text-center group">
          <div className="relative overflow-hidden rounded-md">
            <img src={book.coverImage} alt={book.title} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-custom-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-custom-beige text-xs px-2 text-center">{book.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default BookShelf;