package com.giveus.notification.controller;

import com.giveus.notification.common.dto.CommonResponseBody;
import com.giveus.notification.common.dto.DeleteSuccessDto;
import com.giveus.notification.common.swagger.SwaggerApiSuccess;
import com.giveus.notification.dto.response.NotificationListRes;
import com.giveus.notification.service.NotificationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@Tag(name = "알림 API", description = "Notification")
@RestController
@RequestMapping("/api/v1/notification")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class NotificationController {

    private final NotificationService notificationService;

    // 알림 전체 목록 조회
    @SwaggerApiSuccess(summary = "알림 전체 조회", implementation = NotificationListRes.class)
    @GetMapping("/{memberNo}")
    public ResponseEntity<CommonResponseBody<List<NotificationListRes>>> getNotificationList(@PathVariable int memberNo) {
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, notificationService.getNotificationList(memberNo)));
    }

    // 알림 단건 삭제
    @SwaggerApiSuccess(summary = "알림 단일 삭제", implementation = DeleteSuccessDto.class)
    @DeleteMapping("/{notificationNo}")
    public ResponseEntity<CommonResponseBody<DeleteSuccessDto>> deleteNotification(@PathVariable int notificationNo) {
        log.info("notificationNo :  {}", notificationNo);
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, notificationService.deleteNotification(notificationNo)));
    }

    // 알림 전체 삭제
    @SwaggerApiSuccess(summary = "알림 전체 삭제", implementation = DeleteSuccessDto.class)
    @DeleteMapping("/deleteAll/{memberNo}")
    public ResponseEntity<CommonResponseBody<DeleteSuccessDto>> deleteAllNotification(@PathVariable int memberNo) {
        log.info("memberNo :  {}", memberNo);
        return ResponseEntity
                .status(OK)
                .body(new CommonResponseBody<>(OK, notificationService.deleteAllNotification(memberNo)));
    }
    
    // 알림 단일 읽음 여부 변경

    // 알림 전체 읽음 여부 변경

    // FCM 토큰 저장
    
    // 펀딩 후기 등록 시 알림 발송

    // 진료비 세부 내역 등록 시 알림 발소

}
