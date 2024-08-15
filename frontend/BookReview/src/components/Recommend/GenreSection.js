import React from 'react';
import BookCard from './BookCard';

const GenreSection = ({ genre, books }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-custom-violet mb-4">{genre}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  </div>
);

export default GenreSection;