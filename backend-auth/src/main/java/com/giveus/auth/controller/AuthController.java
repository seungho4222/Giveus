package com.giveus.auth.controller;

import com.giveus.auth.dto.request.AuthJoinPostReq;
import com.giveus.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
        authService.updateMember(userJoinPostReq);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
