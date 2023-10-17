package com.dictionary.search.repository;

import com.dictionary.search.payload.SearchResponse;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchRepository extends ElasticsearchRepository<SearchResponse,String> {
}
