package com.dictionary.historyandfavorite.service;

import com.dictionary.historyandfavorite.entity.HistoryEntity;
import com.dictionary.historyandfavorite.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class HistoryService {
    @Autowired
    HistoryRepository repository;

    public HistoryEntity save(String word, String username, String token) {
        HistoryEntity history = HistoryEntity.builder()
                .word(word)
                .searchTime(new Date())
                .username(username)
                .token(token)
                .build();
        return repository.save(history);
    }
    public List<HistoryEntity> findByUsername(String username) {
        return repository.findByUsername(username);
    }
}
