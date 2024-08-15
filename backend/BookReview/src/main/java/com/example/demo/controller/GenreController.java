package com.example.demo.controller;

import com.example.demo.dto.GenreDTO;
import com.example.demo.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/genres")
public class GenreController {

    @Autowired
    private GenreService genreService;
    // Endpoint for creation
    @PostMapping
    public ResponseEntity<GenreDTO> createGenre(@RequestBody GenreDTO genreDTO) {
        return ResponseEntity.ok(genreService.createGenre(genreDTO));
    }
    // Endpoint for fetching
    @GetMapping("/{id}")
    public ResponseEntity<GenreDTO> getGenreById(@PathVariable Long id) {
        return ResponseEntity.ok(genreService.getGenreById(id));
    }
 // Endpoint for updation
    @PutMapping("/{id}")
    public ResponseEntity<GenreDTO> updateGenre(@PathVariable Long id, @RequestBody GenreDTO genreDTO) {
        return ResponseEntity.ok(genreService.updateGenre(id, genreDTO));
    }
    // Endpoint for deletion
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGenre(@PathVariable Long id) {
        genreService.deleteGenre(id);
        return ResponseEntity.noContent().build();
    }
}
