package com.giveus.funding.domain.review.application;

import com.giveus.funding.domain.funding.application.FundingService;
import com.giveus.funding.domain.funding.domain.Funding;
import com.giveus.funding.domain.review.dao.ReviewRepository;
import com.giveus.funding.domain.review.domain.Review;
import com.giveus.funding.domain.review.dto.ReviewCreateReq;
import com.giveus.funding.domain.review.dto.ReviewDetailRes;
import com.giveus.funding.domain.review.exception.AlreadyExistReviewException;
import com.giveus.funding.domain.review.exception.ReviewNotFoundException;
import com.giveus.funding.global.common.enums.Folder;
import com.giveus.funding.global.common.response.CreateSuccessDto;
import com.giveus.funding.global.error.exception.InvalidRequestDataException;
import com.giveus.funding.global.util.FileUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final FundingService fundingService;
    private final FileUtil fileUtil;


    /**
     * @inheritDoc
     */
    @Override
    public List<ReviewDetailRes> getReviewList(int count) {
        return reviewRepository.getReviewList(count);
    }

    /**
     * @inheritDoc
     */
    @Override
    public ReviewDetailRes getReview(int fundingNo) {
        Review review = reviewRepository.findReviewByFunding_FundingNo(fundingNo)
                .orElseThrow(ReviewNotFoundException::new);

        return ReviewDetailRes.builder()
                .reviewNo(review.getReviewNo())
                .fundingNo(review.getFunding().getFundingNo())
                .title(review.getTitle())
                .content(review.getContent())
                .createdAt(review.getCreatedAt())
                .url(review.getUrl())
                .build();
    }


    private boolean isExistFundingReview(int fundingNo) {
        return findReviewEntity(fundingNo).isPresent();
    }

    /**
     * @inheritDoc
     */
    @Override
    public CreateSuccessDto createReview(ReviewCreateReq reviewCreateReq, MultipartFile file) {
        // 펀딩마다 고유하게 갖고있는 regId로 펀딩 가져오기
        Funding funding = fundingService.getFundingEntity(reviewCreateReq.getRegId());

        // 해당 펀딩이 후기가 이미 등록 되어있는지 확인
        if (isExistFundingReview(funding.getFundingNo())) { // 이미 등록되어있는 펀딩이라면 409 예외 발생
            throw new AlreadyExistReviewException();
        }

        // 펀딩 후기 등록
        Review review = dtoToEntity(reviewCreateReq, funding);
        String objectName = null;
        if (Objects.nonNull(file)) { // 업로드 할 파일이 있을 경우
            objectName = fileUtil.generateObjectName(); // 랜덤 오브젝트명 생성
            String url = fileUtil.upload(file, objectName, Folder.REVIEW); // 파일 업로드
            review.setUrl(url);
        }

        try { // 등록 시도
            reviewRepository.save(review);
        } catch (Exception e) { // 등록 실패 시
            if (Objects.nonNull(file)) { // 업로드 한 파일이 있을 경우
                // TODO 더 테스트가 필요할듯
                fileUtil.delete(objectName, Folder.REVIEW); // AWS S3에서 등록했던 파일 삭제
            }
            throw new InvalidRequestDataException("등록 요청 데이터 형식이 맞지 않습니다.");
        }

        return new CreateSuccessDto(review.getReviewNo());
    }

    private static Review dtoToEntity(ReviewCreateReq reviewCreateReq, Funding funding) {
        return Review.builder()
                .title(reviewCreateReq.getTitle())
                .content(reviewCreateReq.getContent())
                .funding(funding)
                .build();
    }

    /**
     * @inheritDoc
     */
    @Override
    public Optional<Review> findReviewEntity(int fundingNo) {
        return reviewRepository.findReviewByFunding_FundingNo(fundingNo);
    }
}
