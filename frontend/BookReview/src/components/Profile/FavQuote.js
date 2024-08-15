import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const FavQuote = ({ quote, book }) => (
  <div className="bg-custom-black bg-opacity-80 rounded-lg shadow-md p-6 mb-4">
    <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-custom-orange mb-4" />
    <p className="text-lg italic text-custom-beige mb-4">{quote}</p>
    <p className="text-right text-custom-violet">- {book}</p>
  </div>
);
export default FavQuote;