import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';
import Layout from '../components/Layout/Layout';

const BookResult = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const bookDoc = await getDoc(doc(db, 'books', bookId));
      if (bookDoc.exists()) {
        setBook(bookDoc.data());
      }
    };

    fetchBook();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-custom-black text-custom-beige">
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-custom-violet">{book.title}</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <img src={book.image} alt={book.title} className="w-full h-auto object-cover rounded-md" />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg font-semibold mb-4">Author: {book.author}</p>
              <p className="text-lg font-semibold mb-4">Rating: {book.rating}/5</p>
              <p className="text-lg font-semibold mb-4">Genre: {book.genres.join(', ')}</p>
              <p className="text-lg font-semibold mb-4">Language: English</p>
              <p className="text-lg font-semibold mb-4">Publish Year: {book.publishYear}</p>
              <p className="text-lg font-semibold mb-4">No. of Pages: 270</p>
              <p className="text-lg font-semibold mb-4">Reading Time: 4 hrs</p>
              <p className="text-lg font-semibold mb-4">Summary: {book.summary}</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BookResult;
