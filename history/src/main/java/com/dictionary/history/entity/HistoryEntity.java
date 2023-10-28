package com.dictionary.history.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "history")
public class HistoryEntity {
    @Id
    private String id;
    private String word;
    private String username;
    private String token;
    private Date searchTime;
}
