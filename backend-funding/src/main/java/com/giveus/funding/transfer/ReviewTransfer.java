package com.giveus.funding.transfer;

import com.giveus.funding.dto.response.ReviewDetailRes;
import com.giveus.funding.entity.Review;
import com.giveus.funding.dto.request.ReviewCreateReq;
import com.giveus.funding.entity.Funding;
import com.giveus.funding.entity.Review;

public class ReviewTransfer {
    public static Review dtoToEntity(Funding funding, ReviewCreateReq req) {
        return Review.builder()
                .title(req.getTitle())
                .content(req.getContent())
                .funding(funding)
                .build();


//    public static Funding dtoToEntity(FundingCreateReq req) {
//        return Funding.builder()
//                .issueNumber(req.getIssueNumber())
//                .birth(req.getBirth())
//                .diagnosisDate(req.getDiagnosisDate())
//                .diseaseCode(req.getDiseaseCode())
//                .phone(req.getPhone())
//                .diseaseName(req.getDiseaseName())
//                .endDate(req.getEndDate())
//                .gender(req.getGender())
//                .title(req.getTitle())
//                .opinion(req.getOpinion())
//                .patientName(req.getPatientName())
//                .registrationNumber(req.getRegistrationNumber())
//                .startDate(req.getStartDate())
//                .targetAmount(req.getTargetAmount())
//                .build();
//
//    }

    public static ReviewDetailRes entityToDto(Review review) {
        return ReviewDetailRes.builder()
                .reviewNo(review.getReviewNo())
                .fundingNo(review.getFunding().getFundingNo())
                .title(review.getTitle())
                .content(review.getContent())
                .createdAt(review.getCreatedAt())
                .url(review.getUrl())
                .build();
    }
}
