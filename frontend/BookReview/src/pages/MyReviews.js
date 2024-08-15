import React, { useState } from 'react';
import NewReviewForm from '../components/Review/NewReviewForm';
import ReviewCard from '../components/Review/ReviewCard';
import Layout from '../components/Layout/Layout';
const MyReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([...reviews, { ...newReview, id: Date.now() }]);
  };

  const editReview = (reviewToEdit) => {
    // Implement edit functionality
    console.log('Edit review:', reviewToEdit);
  };

  const deleteReview = (reviewId) => {
    setReviews(reviews.filter(review => review.id !== reviewId));
  };

  return (
    <Layout>
    <div className="min-h-screen bg-custom-vector bg-cover bg-center">
    <div className="container mx-auto py-8">
    <h1 className="text-5xl font-bold text-center text-custom-violet mb-8">My Reviews</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
    <NewReviewForm onSubmit={addReview} />
    </div>
    <div>
    <h2 className="text-2xl font-bold mb-4 text-custom-violet">Your Reviews</h2>
    {reviews.map(review => (
      <ReviewCard
      key={review.id}
      review={review}
      onEdit={editReview}
      onDelete={deleteReview}
      />
      ))}
      {reviews.length === 0 && (
        <p className="text-custom-black">You haven't posted any reviews yet.</p>
        )}
        </div>
        </div>
        </div>
        </div>
        </Layout>
      );
    };
    
    export default MyReviewsPage;