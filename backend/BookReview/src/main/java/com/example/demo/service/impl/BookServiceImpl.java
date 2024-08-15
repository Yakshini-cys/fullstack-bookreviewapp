package com.example.demo.service.impl;

import com.example.demo.dto.BookDTO;
import com.example.demo.exception.*;
import com.example.demo.entity.Book;
import com.example.demo.repository.BookRepository;
import com.example.demo.service.BookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public BookDTO createBook(BookDTO bookDTO) {
        Book book = modelMapper.map(bookDTO, Book.class);
        book = bookRepository.save(book);
        return modelMapper.map(book, BookDTO.class);
    }

    @Override
    public BookDTO getBookById(Long bookId) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        return modelMapper.map(book, BookDTO.class);
    }

    @Override
    public BookDTO updateBook(Long bookId, BookDTO bookDTO) {
        // Retrieve the existing book or throw an exception if not found
        Book existingBook = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));

        // Update the fields of the existing book with values from the bookDTO
            existingBook.setTitle(bookDTO.getTitle());
            existingBook.setAuthor(bookDTO.getAuthor());
            existingBook.setIsbn(bookDTO.getIsbn());
            existingBook.setPublicationDate(bookDTO.getPublicationDate());
            existingBook.setCoverImage(bookDTO.getCoverImage());

        // Save the updated book entity
        Book updatedBook = bookRepository.save(existingBook);

        // Convert the updated book entity to a BookDTO and return it
        return modelMapper.map(updatedBook, BookDTO.class);
    }


    @Override
    public void deleteBook(Long bookId) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
        bookRepository.delete(book);
    }
}
