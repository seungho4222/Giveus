package com.giveus.notification.repository;

import com.giveus.notification.dto.response.NotificationListRes;
import com.giveus.notification.entity.Notification;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {

    Optional<Notification> findByNotificationNo(int notificationNo);

    // 벌크 연산(다중 Update, Insert, Delete)을 하나의 쿼리로 수행
    @Modifying
    @Query("update Notification n set n.isRead = true where n.memberNo = :memberNo")
    void updateAllByMemberNo(@Param("memberNo") int memberNo);

    List<NotificationListRes> getNotificationByMemberNo(int memberNo);

    void deleteByNotificationNo(int notificationNo);

    void deleteAllByMemberNo(int memberNo);

//    @Modifying
//    @Query("update Notification n set n.isRead = true where n.memberNo = :memberNo")
//    List<DevicenListRes> getDeviceList(String category);

}
