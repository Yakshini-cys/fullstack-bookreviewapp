package com.example.demo.service.impl;
import com.example.demo.exception.*;
import com.example.demo.dto.ReadingStatusDTO;
import com.example.demo.entity.Book;
import com.example.demo.entity.ReadingStatus;
import com.example.demo.entity.User;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.ReadingStatusRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ReadingStatusService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReadingStatusServiceImpl implements ReadingStatusService {

    @Autowired
    private ReadingStatusRepository readingStatusRepository;
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ReadingStatusDTO createReadingStatus(ReadingStatusDTO readingStatusDTO) {
        ReadingStatus readingStatus = modelMapper.map(readingStatusDTO, ReadingStatus.class);
        readingStatus = readingStatusRepository.save(readingStatus);
        return modelMapper.map(readingStatus, ReadingStatusDTO.class);
    }

    @Override
    public ReadingStatusDTO getReadingStatusById(Long statusId) {
        ReadingStatus readingStatus = readingStatusRepository.findById(statusId)
                .orElseThrow(() -> new ResourceNotFoundException("Reading Status not found"));
        return modelMapper.map(readingStatus, ReadingStatusDTO.class);
    }
    @Override
    public ReadingStatusDTO updateReadingStatus(Long statusId, ReadingStatusDTO readingStatusDTO) {
        // Retrieve the existing reading status or throw an exception if not found
        ReadingStatus existingReadingStatus = readingStatusRepository.findById(statusId)
                .orElseThrow(() -> new ResourceNotFoundException("Reading Status not found"));

        // Update the fields of the existing reading status with values from the readingStatusDTO
        if (readingStatusDTO.getStatus() != null) {
            existingReadingStatus.setStatus(readingStatusDTO.getStatus());
        }
        if (readingStatusDTO.getDateAdded() != null) {
            existingReadingStatus.setDateAdded(readingStatusDTO.getDateAdded());
        }
        if (readingStatusDTO.getUserId() != null) {
            User user = userRepository.findById(readingStatusDTO.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
            existingReadingStatus.setUser(user);
        }
        if (readingStatusDTO.getBookId() != null) {
            Book book = bookRepository.findById(readingStatusDTO.getBookId())
                    .orElseThrow(() -> new ResourceNotFoundException("Book not found"));
            existingReadingStatus.setBook(book);
        }

        // Save the updated reading status entity
        ReadingStatus updatedReadingStatus = readingStatusRepository.save(existingReadingStatus);

        // Convert the updated reading status entity to a ReadingStatusDTO and return it
        return modelMapper.map(updatedReadingStatus, ReadingStatusDTO.class);
    }

    @Override
    public void deleteReadingStatus(Long statusId) {
        ReadingStatus readingStatus = readingStatusRepository.findById(statusId)
                .orElseThrow(() -> new ResourceNotFoundException("Reading Status not found"));
        readingStatusRepository.delete(readingStatus);
    }
}
