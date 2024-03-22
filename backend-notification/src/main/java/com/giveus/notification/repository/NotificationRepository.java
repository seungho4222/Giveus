package com.giveus.notification.repository;

import com.giveus.notification.dto.response.FundingReviewListRes;
import com.giveus.notification.dto.response.NotificationListRes;
import com.giveus.notification.entity.Notification;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Integer> {

    Optional<Notification> findByNotificationNo(int notificationNo);

    // 벌크 연산(다중 Update, Insert, Delete)을 하나의 쿼리로 수행
    @Modifying
    @Query("update Notification n set n.isRead = true where n.memberNo = :memberNo")
    void updateAllByMemberNo(@Param("memberNo") int memberNo);

    List<NotificationListRes> getNotificationByMemberNo(int memberNo);

    void deleteByNotificationNo(int notificationNo);

    void deleteAllByMemberNo(int memberNo);

    @Query("SELECT DISTINCT new com.giveus.notification.dto.response.FundingReviewListRes(f.member.memberNo, f.funding.fundingNo, m.fundingReview, d.deviceToken) " +
            "FROM MemberFunding f " +
            "LEFT JOIN MemberSetting m ON f.member.memberNo = m.member.memberNo " +
            "LEFT JOIN MemberDevice d ON f.member.memberNo = d.memberNo " +
            "WHERE f.funding.fundingNo = :fundingNo AND m.fundingReview = TRUE ")
    List<FundingReviewListRes> getFundingReviewList(@Param("fundingNo") int fundingNo);
}
