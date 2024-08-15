package com.example.demo.service.impl;
import com.example.demo.exception.*;
import com.example.demo.dto.GenreDTO;
import com.example.demo.entity.Genre;
import com.example.demo.repository.GenreRepository;
import com.example.demo.service.GenreService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenreServiceImpl implements GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public GenreDTO createGenre(GenreDTO genreDTO) {
        Genre genre = modelMapper.map(genreDTO, Genre.class);
        genre = genreRepository.save(genre);
        return modelMapper.map(genre, GenreDTO.class);
    }

    @Override
    public GenreDTO getGenreById(Long genreId) {
        Genre genre = genreRepository.findById(genreId)
                .orElseThrow(() -> new ResourceNotFoundException("Genre not found"));
        return modelMapper.map(genre, GenreDTO.class);
    }

    @Override
    public GenreDTO updateGenre(Long genreId, GenreDTO genreDTO) {
        Genre existingGenre = genreRepository.findById(genreId)
                .orElseThrow(() -> new ResourceNotFoundException("Genre not found"));

        // Manually update fields of existingGenre using the values from genreDTO
        existingGenre.setGenreName(genreDTO.getGenreName());
        // Add any other fields that need to be updated
  

        Genre updatedGenre = genreRepository.save(existingGenre);
        return modelMapper.map(updatedGenre, GenreDTO.class);
    }


    @Override
    public void deleteGenre(Long genreId) {
        Genre genre = genreRepository.findById(genreId)
                .orElseThrow(() -> new ResourceNotFoundException("Genre not found"));
        genreRepository.delete(genre);
    }
}
