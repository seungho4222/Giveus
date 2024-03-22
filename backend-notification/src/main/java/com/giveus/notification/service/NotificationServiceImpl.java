package com.giveus.notification.service;


import com.giveus.notification.dto.response.NotificationListRes;
import com.giveus.notification.entity.Notification;
import com.giveus.notification.exception.NotificationDeleteFailedException;
import com.giveus.notification.exception.NotificationNotFoundException;
import com.giveus.notification.exception.NotificationUpdateFailedException;
import com.giveus.notification.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
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
    @Transactional
    public void deleteNotification(int notificationNo) {
        try {
            notificationRepository.deleteByNotificationNo(notificationNo);
        } catch(Exception e) {
            throw new NotificationDeleteFailedException();
        }
    }

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public void deleteAllNotification(int memberNo) {
        try {
            notificationRepository.deleteAllByMemberNo(memberNo);
        } catch(Exception e) {
            throw new NotificationDeleteFailedException();
        }
    }

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public void updateNotification(int notificationNo) {
        Notification notification = notificationRepository.findByNotificationNo(notificationNo).orElseThrow(NotificationNotFoundException::new);
        notification.updateIsRead();
        notificationRepository.save(notification);
    }

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public void updateAllNotification(int memberNo) {
        log.info("============== NotificationServiceImpl - updateAllNotification ::: memberNo :  {}", memberNo);
        try {
            notificationRepository.updateAllByMemberNo(memberNo);
        } catch(Exception e) {
            throw new NotificationUpdateFailedException();
        }
    }


}
