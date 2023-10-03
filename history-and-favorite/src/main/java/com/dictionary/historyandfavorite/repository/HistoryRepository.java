package com.dictionary.historyandfavorite.repository;

import com.dictionary.historyandfavorite.entity.HistoryEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HistoryRepository extends MongoRepository<HistoryEntity, String> {
    List<HistoryEntity> findByUsername(String username);
}
