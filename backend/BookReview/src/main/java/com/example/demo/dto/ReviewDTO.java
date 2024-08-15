package com.example.demo.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ReviewDTO {
    private Long reviewId;
    private Long userId;
    private Long bookId;
    private int rating;
    private String reviewText;
    private LocalDate reviewDate;
}
