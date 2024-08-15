package com.example.demo.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class ReadingStatusDTO {
    private Long statusId;
    private Long userId;
    private Long bookId;
    private String status;
    private LocalDate dateAdded;
}
