package com.giveus.auth.controller;

import com.giveus.auth.dto.request.AuthJoinPostReq;
import com.giveus.auth.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthService authService;


    @PutMapping("/join")
    public ResponseEntity<?> updateMember(@RequestBody AuthJoinPostReq userJoinPostReq) {
        log.info("회원가입 요청 " + userJoinPostReq.toString());

        return new ResponseEntity<>(authService.updateMember(userJoinPostReq), HttpStatus.OK);
    }

    @GetMapping("/{memberNo}")
    public ResponseEntity<?> findByMemberNo(@PathVariable int memberNo) {
        log.info("회원정보조회 요청 1 " + memberNo);

        return new ResponseEntity<>(authService.findByMemberNo(memberNo), HttpStatus.OK);
    }

    @GetMapping("/info")
    public ResponseEntity<?> findByAccessToken(HttpServletRequest httpServletRequest) {
        log.info("회원정보조회 요청 2 " + httpServletRequest);

        return new ResponseEntity<>(authService.findByAccessToken(httpServletRequest), HttpStatus.OK);
    }

}
