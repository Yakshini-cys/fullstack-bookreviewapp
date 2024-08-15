import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';
import GenreSection from '../components/Recommend/GenreSection';
import BookOfTheDay from '../components/Recommend/BookOfTheDay';
import ReadingChallengeBar from '../components/Recommend/ReadingChallenge';

const RecommendationsPage = () => {
  const [recommendations] = useState({
    personalizedBooks: [
      { id: 1, title: "The Midnight Library", author: "Matt Haig", rating: 4.2, coverImage: "https://example.com/midnight-library.jpg" },
      { id: 2, title: "Atomic Habits", author: "James Clear", rating: 4.8, coverImage: "https://example.com/atomic-habits.jpg" },
      // Add more books...
    ],
    genreBooks: {
      "Science Fiction": [
        { id: 3, title: "Dune", author: "Frank Herbert", rating: 4.5, coverImage: "https://example.com/dune.jpg" },
        { id: 4, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", rating: 4.3, coverImage: "https://example.com/hitchhiker.jpg" },
        // Add more books...
      ],
      "Mystery": [
        { id: 5, title: "The Silent Patient", author: "Alex Michaelides", rating: 4.1, coverImage: "https://example.com/silent-patient.jpg" },
        { id: 6, title: "Gone Girl", author: "Gillian Flynn", rating: 4.0, coverImage: "https://example.com/gone-girl.jpg" },
        // Add more books...
      ],
    },
    bookOfTheDay: {
      title: "Project Hail Mary",
      author: "Andy Weir",
      description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the #1 New York Times bestselling author of The Martian.",
      coverImage: "https://example.com/project-hail-mary.jpg",
    },
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-custom-black to-custom-black animate-gradient-x">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-center text-custom-orange mb-8">Your Personalized Recommendations</h1>
          
          <ReadingChallengeBar booksRead={15} totalBooks={50} />
          
          <BookOfTheDay book={recommendations.bookOfTheDay} />
          
          <GenreSection genre="Personalized Picks" books={recommendations.personalizedBooks} />
          
          {Object.entries(recommendations.genreBooks).map(([genre, books]) => (
            <GenreSection key={genre} genre={genre} books={books} />
          ))}
          
          <div className="text-center mt-8">
            <button className="bg-custom-violet text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition flex items-center mx-auto">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
              Explore More Books
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecommendationsPage;