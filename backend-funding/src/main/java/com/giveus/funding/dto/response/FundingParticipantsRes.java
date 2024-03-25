package com.giveus.funding.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class FundingParticipantsRes {

    private int memberFundingNo;
    private String name;
    private int amount;
    private LocalDate createdAt;
    private Boolean isPublic;
    private String imageUrl;
}
