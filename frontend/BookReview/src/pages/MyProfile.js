import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faListAlt, faStar, faTrophy, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';
import BookShelf from '../components/Profile/BookShelf';
import StatCard from '../components/Profile/StatCard';
import ReadingGoal from '../components/Profile/ReadingGoal';
import FavQuote from '../components/Profile/FavQuote';

const MyProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const mockUserData = {
        name: "Username",
        bio: "Avid reader | Book blogger | Coffee lover",
        booksReadThisYear: 15,
        yearlyReadingGoal: 50,
        totalBooksRead: 237,
        totalReviews: 180,
        readingStreak: 42,
        avgReadingTime: 45,
        favoriteQuote: "So many books, so little time.",
        favoriteQuoteBook: "Frank Zappa",
        currentlyReading: [
          { id: 1, title: "The Midnight Library", coverImage: "https://example.com/midnight-library.jpg" },
          { id: 2, title: "Project Hail Mary", coverImage: "https://example.com/project-hail-mary.jpg" },
        ],
        wantToRead: [
          { id: 3, title: "Klara and the Sun", coverImage: "https://example.com/klara-and-the-sun.jpg" },
          { id: 4, title: "The Four Winds", coverImage: "https://example.com/the-four-winds.jpg" },
          { id: 5, title: "The Paris Library", coverImage: "https://example.com/the-paris-library.jpg" },
        ],
        recentlyRead: [
          { id: 6, title: "The Vanishing Half", coverImage: "https://example.com/the-vanishing-half.jpg" },
          { id: 7, title: "Atomic Habits", coverImage: "https://example.com/atomic-habits.jpg" },
          { id: 8, title: "Where the Crawdads Sing", coverImage: "https://example.com/where-the-crawdads-sing.jpg" },
          { id: 9, title: "The Silent Patient", coverImage: "https://example.com/the-silent-patient.jpg" },
        ]
      };
      setUserData(mockUserData);
    }, 1000);
  }, []);

  if (!userData) return <div className="text-center py-10 text-custom-beige">Loading profile data...</div>;

  return (
    <div className='bg-custom-purple'>
    <Layout>
    <div className="container mx-auto px-4 py-8">
    <div className="bg-custom-black bg-opacity-80 rounded-lg shadow-lg p-6 mb-8">
    <div className="flex flex-col sm:flex-row items-center mb-6">
    <div className="w-32 h-32 rounded-full mb-4 sm:mb-0 sm:mr-6 border-4 border-custom-orange flex items-center justify-center bg-custom-orange">
    <FontAwesomeIcon icon={faUser} className="text-5xl text-custom-black" />
    </div>
    <div className="text-center sm:text-left">
    <h1 className="text-3xl font-bold text-custom-beige mb-2">{userData.name}</h1>
    <p className="text-custom-purple">{userData.bio}</p>
    </div>
    </div>
    <ReadingGoal current={userData.booksReadThisYear} target={userData.yearlyReadingGoal} />
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
    <StatCard title="Books Read" value={userData.totalBooksRead} icon={faBook} />
    <StatCard title="Reviews Written" value={userData.totalReviews} icon={faStar} />
    <StatCard title="Reading Streak" value={`${userData.readingStreak} days`} icon={faTrophy} />
    <StatCard title="Avg. Reading Time" value={`${userData.avgReadingTime} mins/day`} icon={faClock} />
    </div>
    
    <FavQuote quote={userData.favoriteQuote} book={userData.favoriteQuoteBook} />
    
    <BookShelf title="Currently Reading" books={userData.currentlyReading} icon={faBookOpen} />
    <BookShelf title="Want to Read" books={userData.wantToRead} icon={faListAlt} />
    <BookShelf title="Recently Read" books={userData.recentlyRead} icon={faBook} />
    </div>
    </Layout>
    </div>
  );
};

export default MyProfilePage;