package com.dictionary.authentication.payload;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDetails {
    private String username;
    private String role;
}
