package com.giveus.notification.service;

import com.giveus.notification.dto.response.NotificationListRes;

import java.util.List;

public interface NotificationService {

    /**
     * 알림 목록을 조회하는 메서드입니다.
     * 
     * @return 조회한 알림 목록
     */
    List<NotificationListRes> getNotificationList(int memberNo);


}
