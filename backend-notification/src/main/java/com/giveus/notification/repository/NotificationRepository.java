package com.giveus.notification.repository;

import com.giveus.notification.common.dto.DeleteSuccessDto;
import com.giveus.notification.dto.response.NotificationListRes;
import com.giveus.notification.entity.Notification;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {

//    @Query(value = "select " +
//            "new NotificationListRes(n.notificationNo, n.memberNo, n.category, n.content, n.detail, n.createdAt, n.isRead) " +
//            "from Notification n " +
//            "where n.memberNo = :memberNo")
    List<NotificationListRes> getNotificationByMemberNo(int memberNo);


    DeleteSuccessDto deleteByNotificationNo(int notificationNo);

    DeleteSuccessDto deleteAllByMemberNo(int memberNo);
}
