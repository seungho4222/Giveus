package com.giveus.notification.repository;

import com.giveus.notification.dto.response.NotificationListRes;
import com.giveus.notification.entity.Notification;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {

    List<NotificationListRes> getNotificationByMemberNo(int memberNo);

    void deleteByNotificationNo(int notificationNo);

    void deleteAllByMemberNo(int memberNo);

}
