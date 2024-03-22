package com.giveus.notification.service;

import com.giveus.notification.common.dto.DeleteSuccessDto;
import com.giveus.notification.dto.response.NotificationListRes;

import java.util.List;

public interface NotificationService {

    /**
     * 알림 목록을 조회하는 메서드입니다.
     * @param memberNo 회원번호
     * @return 조회한 알림 목록
     */
    List<NotificationListRes> getNotificationList(int memberNo);


    /**
     * 알림 번호로 알림을 단건 삭제하는 메서드입니다.
     * @param notificationNo 알림번호
     * @return
     */
    void deleteNotification(int notificationNo);


    /**
     * 회원 번호로 알림을 전체 삭제하는 메서드입니다.
     * @param memberNo 회원번호
     * @return
     */
    void deleteAllNotification(int memberNo);
}
