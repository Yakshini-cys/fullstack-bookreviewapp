package com.example.demo.service;

import com.example.demo.dto.ReviewDTO;

public interface ReviewService {
	// method declarations here
    ReviewDTO createReview(ReviewDTO reviewDTO);  // for posting new reviews
    ReviewDTO getReviewById(Long reviewId); // for fetching existing reviews
    ReviewDTO updateReview(Long reviewId, ReviewDTO reviewDTO); // for updating existing reviews
    void deleteReview(Long reviewId); // for deleting reviews
}
