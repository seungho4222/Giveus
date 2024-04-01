package com.giveus.notification.service;

import com.giveus.notification.dto.response.MemberSettingInfoRes;
import com.giveus.notification.dto.response.NotificationListRes;
import jakarta.servlet.http.HttpServletRequest;

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

    
    /**
     * 알림 번호로 알림 단일 읽음 여부를 읽음 처리하는 메서드입니다.
     * @param notificationNo 알림번호
     * @return
     */
    void updateNotification(int notificationNo);


    /**
     * 회원 번호로 알림 전체 읽음 여부를 읽음 처리하는 메서드입니다.
     * @param memberNo 회원번호
     * @return
     */
    void updateAllNotification(int memberNo);

    /**
     * 펀딩 번호로 펀딩 후기 등록 알림을 보내는 메서드입니다.
     * @param fundingNo 펀딩번호
     */
    void createFundingReviewNotification(int fundingNo);

    /**
     * 펀딩 번호로 진료비 사용 내역 등록 알림을 보내는 메서드입니다.
     * @param fundingNo 펀딩번호
     */
    void createUsageHistoryNotification(int fundingNo);

    /**
     * 엑세스 토큰으로 사용자 알림 허용 정보를 가져오는 메서드입니다.
     * @param httpServletRequest Header의 AccessToken
     * @return
     */
    MemberSettingInfoRes getMemberSetting(HttpServletRequest httpServletRequest);

    /**
     * 엑세스 토큰으로 펀딩 후기 등록 알림 설정 변경하는 메서드입니다.
     * @param httpServletRequest Header의 AccessToken
     * @return
     */
    MemberSettingInfoRes updateFundingReview(HttpServletRequest httpServletRequest);

    /**
     * 엑세스 토큰으로 진료비 세부 내역 등록 알림 설정 변경하는 메서드입니다.
     * @param httpServletRequest Header의 AccessToken
     * @return
     */
    MemberSettingInfoRes updateUsageHistory(HttpServletRequest httpServletRequest);
}
