package com.giveus.notification.service;


import com.giveus.notification.common.dto.DeleteSuccessDto;
import com.giveus.notification.dto.response.NotificationListRes;
import com.giveus.notification.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class NotificationServiceImpl implements NotificationService{

    private final NotificationRepository notificationRepository;

    /**
     * @inheritDoc
     */
    @Override
    public List<NotificationListRes> getNotificationList(int memberNo) {
        return notificationRepository.getNotificationByMemberNo(memberNo);
    }

    /**
     * @inheritDoc
     */
    @Override
    public DeleteSuccessDto deleteNotification(int notificationNo) {
        log.info("============== NotificationServiceImpl : notificationNo :  {}", notificationNo);
        return notificationRepository.deleteByNotificationNo(notificationNo);
    }

    /**
     * @inheritDoc
     */
    @Override
    public DeleteSuccessDto deleteAllNotification(int memberNo) {
        log.info("============== NotificationServiceImpl : notificationNo :  {}", memberNo);
        return notificationRepository.deleteAllByMemberNo(memberNo);
    }


}
