package com.giveus.admin.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class FundingListRes {

    private int fundingNo;

    private String registrationNumber;

    private String patientName;

    private LocalDate birth;

    private String diseaseName;

    private String status;

    private int targetAmount;

    private Boolean isRegDetail;

    private Boolean isRegReview;

    private Boolean isRegUsage;


}
