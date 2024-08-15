import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../Config/firebase';
import Layout from '../components/Layout/Layout';

const BrowsePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All Authors');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Fantasy'];
  const authors = ['All Authors', 'J.K. Rowling', 'J.R.R. Tolkien', 'Jane Austen', 'Charles Dickens'];

  useEffect(() => {
    const fetchBooks = () => {
      let booksQuery = collection(db, 'books');

      if (selectedCategory !== 'All') {
        booksQuery = query(booksQuery, where('genres', 'array-contains', selectedCategory));
      }
      if (selectedAuthor !== 'All Authors') {
        booksQuery = query(booksQuery, where('author', '==', selectedAuthor));
      }

      const unsubscribe = onSnapshot(booksQuery, (snapshot) => {
        const booksList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(booksList);
      });

      return () => unsubscribe();
    };

    fetchBooks();
  }, [selectedCategory, selectedAuthor]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="min-h-screen bg-custom-black text-custom-beige">
      <Layout>
        <motion.div
          className="fixed inset-0 z-0"
          animate={{
            background: [
              'radial-gradient(circle, rgba(140,105,186,0.1) 0%, rgba(0,0,0,0) 70%)',
              'radial-gradient(circle, rgba(225,119,57,0.1) 0%, rgba(0,0,0,0) 70%)',
              'radial-gradient(circle, rgba(108,193,229,0.1) 0%, rgba(0,0,0,0) 70%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-4xl font-bold mb-8 text-center text-custom-violet">Browse Books</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-custom-orange">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category ? 'bg-custom-violet text-custom-black' : 'bg-custom-blue bg-opacity-20 hover:bg-opacity-30'
                  } transition-colors`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-custom-orange">Authors</h2>
            <select 
              className="bg-custom-black text-custom-beige border border-custom-blue rounded-md px-4 py-2 w-full max-w-xs"
              value={selectedAuthor}
              onChange={handleAuthorChange}
            >
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <motion.div
                key={book.id}
                className="bg-custom-blue bg-opacity-10 rounded-lg p-4 hover:bg-opacity-20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookClick(book.id)}
              >
                <div className="w-full h-48 bg-custom-violet bg-opacity-20 rounded-md mb-4">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover rounded-md" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
                <p className="text-sm text-custom-beige opacity-70">{book.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BrowsePage;
