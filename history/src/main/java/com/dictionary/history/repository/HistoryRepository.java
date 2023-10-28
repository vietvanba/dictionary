package com.dictionary.history.repository;

import com.dictionary.history.entity.HistoryEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HistoryRepository extends MongoRepository<HistoryEntity, String> {
    List<HistoryEntity> findByUsername(String username);
}
