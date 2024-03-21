package com.giveus.notification.service;


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
        log.info("============== [start] NotificationServiceImpl : memberNo :  {}", memberNo);
        return notificationRepository.getNotificationByMemberNo(memberNo);
    }


}
