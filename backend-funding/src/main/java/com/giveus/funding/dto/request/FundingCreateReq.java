package com.giveus.funding.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class FundingCreateReq {

    private String issueNumber;

    private String registrationNumber;

    private String patientName;

    private String status;

    private LocalDate birth;

    private char gender;

    private String diseaseName;

    private String diseaseCode;

    private LocalDate diagnosisDate;

    private String opinion;

    private String title;

    private LocalDate startDate;

    private LocalDate endDate;

    private int totalAmount;

    private int targetAmount;

    private LocalDate createdAt;

    private String phone;
}
