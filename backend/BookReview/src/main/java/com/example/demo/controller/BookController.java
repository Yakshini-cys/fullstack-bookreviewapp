package com.example.demo.controller;

import com.example.demo.dto.BookDTO;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService bookService;
    
    //Endpoint for creation
    @PostMapping
    public ResponseEntity<BookDTO> createBook(@RequestBody BookDTO bookDTO) {
    
        return ResponseEntity.ok(bookService.createBook(bookDTO));
    }
    // Endpoint for fetching
    @GetMapping("/{id}")
    public ResponseEntity<BookDTO> getBookById(@PathVariable Long id) {
        return ResponseEntity.ok(bookService.getBookById(id));
    }
  // Endpoint for updation
    @PutMapping("/{id}")
    public ResponseEntity<BookDTO> updateBook(@PathVariable Long id, @RequestBody BookDTO bookDTO) {
        return ResponseEntity.ok(bookService.updateBook(id, bookDTO));
    }
  // Endpoint for deletion
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return "Deleted successfully!";
    }
}
