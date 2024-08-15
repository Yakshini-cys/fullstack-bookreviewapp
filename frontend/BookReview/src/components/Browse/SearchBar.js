// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center bg-custom-beige h-screen">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="h-5 w-5 text-custom-orange" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.415l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </span>
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-full rounded-full text-custom-black placeholder-custom-black focus:outline-none focus:ring-2 focus:ring-custom-violet bg-white"
          placeholder="Search by books name"
        />
      </div>
    </div>
  );
};

export default SearchBar;
