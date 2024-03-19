package com.giveus.admin.transfer;

import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.entity.Funding;

public class FundingTransfer {
    public static Funding dtoToEntity(FundingCreateReq req) {
        return Funding.builder()
                .issueNumber(req.getIssueNumber())
                .birth(req.getBirth())
                .diagnosisDate(req.getDiagnosisDate())
                .diseaseCode(req.getDiseaseCode())
                .phone(req.getPhone())
                .diseaseName(req.getDiseaseName())
                .endDate(req.getEndDate())
                .gender(req.getGender())
                .title(req.getTitle())
                .opinion(req.getOpinion())
                .patientName(req.getPatientName())
                .registrationNumber(req.getRegistrationNumber())
                .startDate(req.getStartDate())
                .status(req.getStatus())
                .targetAmount(req.getTargetAmount())
                .totalAmount(req.getTotalAmount())
                .build();

    }

    public static FundingDetailsRes entityToDto(Funding savedFunding) {
        return null;
    }
}
