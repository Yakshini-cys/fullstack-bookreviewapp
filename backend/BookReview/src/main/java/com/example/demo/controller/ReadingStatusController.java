package com.example.demo.controller;

import com.example.demo.dto.ReadingStatusDTO;
import com.example.demo.service.ReadingStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/reading-statuses")
public class ReadingStatusController {

    @Autowired
    private ReadingStatusService readingStatusService;
    //Endpoint for creation
    @PostMapping
    public ResponseEntity<ReadingStatusDTO> createReadingStatus(@RequestBody ReadingStatusDTO readingStatusDTO) {
        return ResponseEntity.ok(readingStatusService.createReadingStatus(readingStatusDTO));
    }
    // Endpoint for fetching
    @GetMapping("/{id}")
    public ResponseEntity<ReadingStatusDTO> getReadingStatusById(@PathVariable Long id) {
        return ResponseEntity.ok(readingStatusService.getReadingStatusById(id));
    }
 // Endpoint for updation
    @PutMapping("/{id}")
    public ResponseEntity<ReadingStatusDTO> updateReadingStatus(@PathVariable Long id, @RequestBody ReadingStatusDTO readingStatusDTO) {
        return ResponseEntity.ok(readingStatusService.updateReadingStatus(id, readingStatusDTO));
    }
    // Endpoint for deletion
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReadingStatus(@PathVariable Long id) {
        readingStatusService.deleteReadingStatus(id);
        return ResponseEntity.noContent().build();
    }
}
