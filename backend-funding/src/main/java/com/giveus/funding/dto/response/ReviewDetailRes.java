package com.giveus.funding.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class ReviewDetailRes {

    private int reviewNo;

    private int fundingNo;

    private String title;

    private String content;

    private LocalDate createdAt;

    private String url;

}
