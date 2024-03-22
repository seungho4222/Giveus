package com.giveus.notification.service;


import com.giveus.notification.dto.response.FundingReviewListRes;
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
        try {
            notificationRepository.updateAllByMemberNo(memberNo);
        } catch(Exception e) {
            throw new NotificationUpdateFailedException();
        }
    }

    /**
     * @inheritDoc
     */
    @Override
    @Transactional
    public void createFundingReviewNotification(int fundingNo) {
        log.info("============== NotificationServiceImpl - createFundingReviewNotification ::: fundingNo :  {}", fundingNo);

        // 1) 해당 펀딩에 참여한 사람들 중 알림 설정이 true인 사람들 얻어옴
        List<FundingReviewListRes> list = notificationRepository.getFundingReviewList(fundingNo);
        for(int i=0; i<list.size(); i++) {
            log.info("========== " + list.get(i).toString() + " ==========");
        }

        // 2) 해당 사람들 모두에게 펀딩 후기 등록 알림 발송 (FCM)


        // 3) 해당 내용 알림 테이블에 기록 (Notification 테이블에 기록)


    }


}
