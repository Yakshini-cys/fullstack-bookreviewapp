import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { db } from '../Config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const BookCard = ({ title, author, rating, image }) => (
  <div className="flex-shrink-0 w-48 m-2 bg-[#000000] rounded-lg shadow-md overflow-hidden relative border border-[#8C69BA]">
    <div className="absolute inset-0 bg-gradient-to-r from-[#8C69BA] to-[#e17739] animate-gradient-x"></div>
    <div className="relative z-10">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 bg-[#000000]">
        <h3 className="font-bold text-lg text-[#d7cebd]">{title}</h3>
        <p className="text-[#6cc1e5]">{author}</p>
        <div className="flex items-center mt-2 text-[#e17739]">
          <FontAwesomeIcon icon={faStar} className="mr-1" />
          <span>{rating}/5</span>
        </div>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const containerRef = useRef(null);
  
  const handleExplore = () => {
    navigate("/browse");
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  useEffect(() => {
    const booksCollection = collection(db, 'books');

    const unsubscribe = onSnapshot(booksCollection, (snapshot) => {
      const booksList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBooks(booksList);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-[#000000] min-h-screen text-[#d7cebd]">
      <Layout>
        {/* Hero Section */}
        <div className="relative h-96 bg-custom-bohemian bg-cover bg-center">
          <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[#d7cebd]">
              <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Book</h1>
              <p className="text-xl mb-8">Join our community of book lovers</p>
              <button
                className="bg-[#e17739] text-[#000000] px-6 py-2 rounded-full hover:bg-opacity-90 transition"
                onClick={handleExplore}
              >
                Start Exploring
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div>
          {/* Featured Books */}
          <section className="container mx-auto my-12 overflow-hidden relative">
            <h2 className="text-2xl font-bold mb-4 text-[#8C69BA]">Featured Books</h2>
            <div className="relative">
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#e17739] text-[#000000] p-2 rounded-full z-20"
                onClick={scrollLeft}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div
                className="flex overflow-x-hidden pb-4 no-scrollbar"
                ref={containerRef}
              >
                {books.map((book, index) => (
                  <BookCard key={index} {...book} />
                ))}
              </div>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#e17739] text-[#000000] p-2 rounded-full z-20"
                onClick={scrollRight}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </section>

          {/* Recent Reviews */}
          <section className="container mx-auto my-12">
            <h2 className="text-2xl font-bold mb-4 text-[#8C69BA]">Recent Reviews</h2>
            {/* Add a list or grid of recent reviews here */}
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
  