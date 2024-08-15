package com.example.demo.service;

import com.example.demo.dto.BookDTO;

public interface BookService {
	// method declarations here
	BookDTO createBook(BookDTO bookDTO); // for creating book
    BookDTO getBookById(Long bookId); // for fetching book details
    BookDTO updateBook(Long bookId, BookDTO bookDTO); // for updating book details
    void deleteBook(Long bookId); // for deleting a specific book by id
}

