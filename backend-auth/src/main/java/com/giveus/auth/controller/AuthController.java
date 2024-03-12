//package com.giveus.auth.controller;
//
//import static org.springframework.http.HttpStatus.OK;
//
//import com.giveus.auth.dto.request.AuthJoinPostReq;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/auth")
//@RequiredArgsConstructor
//@Slf4j
//public class AuthController {
//
//    private final AuthService authService;
//
//    @PostMapping("/join")
//    public ResponseEntity<?> join(@RequestBody AuthJoinPostReq userJoinPostReq) {
//        log.info("회원가입 요청 " + userJoinPostReq.toString());
//        return ResponseEntity
//                .status(OK)
//                .body(authService.join(userJoinPostReq));
//    }
//}
