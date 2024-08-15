import React from 'react';

const ReadingChallengeBar = ({ booksRead, totalBooks }) => (
  <div className="bg-custom-beige rounded-lg shadow-md p-4 mb-8">
    <h2 className="text-lg font-bold text-custom-black mb-2">Reading Challenge</h2>
    <div className="flex items-center">
      <div className="flex-grow bg-gray-300 rounded-full h-4 mr-4">
        <div
          className="bg-custom-orange h-4 rounded-full"
          style={{ width: `${(booksRead / totalBooks) * 100}%` }}
        ></div>
      </div>
      <span className="text-custom-black font-bold">
        {booksRead}/{totalBooks} books
      </span>
    </div>
  </div>
);

export default ReadingChallengeBar;