package com.giveus.admin.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class FundingListRes {

    private int fundingNo;

    private String issueNumber;

    private String registrationNumber;

    private String patientName;

    private String status;

    private String title;

    private Boolean isCompleted;
}
