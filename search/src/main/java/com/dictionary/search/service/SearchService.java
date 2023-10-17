package com.dictionary.search.service;

import com.dictionary.search.payload.SearchResponse;
import com.dictionary.search.repository.SearchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchService {
    private final SearchRepository searchRepository;
    private final OxfordDictionaryService oxfordDictionaryService;

    public SearchResponse extractDataFromOxford(String word) {

        return searchRepository.save(oxfordDictionaryService.fetchWordDefinition(word));
    }

    public SearchResponse findByWord(String word) {
        SearchResponse response = searchRepository.findById(word).orElse(null);
        if (response == null) {
            response = extractDataFromOxford(word);
        }
        return response;
    }
}
