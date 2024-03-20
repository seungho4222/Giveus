package com.giveus.payment.service;

import com.giveus.payment.common.repository.TidRepository;
import com.giveus.payment.dto.PayInfoDto;
import com.giveus.payment.dto.request.MakePayRequest;
import com.giveus.payment.dto.request.PayRequest;
import com.giveus.payment.dto.response.PayApproveResDto;
import com.giveus.payment.dto.response.PayReadyResDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
@Slf4j
public class KakaoPayService {

    private final MakePayRequest makePayRequest;
    private final TidRepository tidRepository;


    @Value("${pay.kakao.secret-key}")
    private String secretKey;

    /** 카오페이 결제를 시작하기 위해 상세 정보를 카카오페이 서버에 전달하고 결제 고유 번호(TID)를 받는 단계입니다.
     * 어드민 키를 헤더에 담아 파라미터 값들과 함께 POST로 요청합니다.
     * 테스트  가맹점 코드로 'TC0ONETIME'를 사용 */
    @Transactional
    public PayReadyResDto getRedirectUrl(PayInfoDto payInfoDto) throws Exception {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String name = authentication.getName();
//
//
//        Member member=memberRepository.findByEmail(name)
//                .orElseThrow(()-> new Exception("해당 유저가 존재하지 않습니다."));
//
        int memberNo = 1;

        HttpHeaders headers = new HttpHeaders();

        log.info("secretKey: {}", secretKey);

        /** 요청 헤더 */
        String auth = "SECRET_KEY " + secretKey;
        headers.set("Content-type", "application/json");
        headers.set("Authorization", auth);

        /** 요청 Body */
        PayRequest payRequest = makePayRequest.getReadyRequest(memberNo, payInfoDto);

        /** Header와 Body 합쳐서 RestTemplate로 보내기 위한 밑작업 */
        HttpEntity<MultiValueMap<String, String>> urlRequest = new HttpEntity<>(payRequest.getMap(), headers);

        /** RestTemplate로 Response 받아와서 DTO로 변환후 return */
        RestTemplate rt = new RestTemplate();
        PayReadyResDto payReadyResDto = rt.postForObject(payRequest.getUrl(), urlRequest, PayReadyResDto.class);

        tidRepository.save(memberNo + "", payReadyResDto.getTid(), 5L);
//        member.updateTid(payReadyResDto.getTid());

        log.info("payReadyResDto: {}", payReadyResDto);

        return payReadyResDto;
    }

    @Transactional
    public PayApproveResDto getApprove(String pgToken, int id) throws Exception {

//        Member member=memberRepository.findById(id)
//                .orElseThrow(()->new Exception("해당 유저가 존재하지 않습니다."));

//        String tid=member.getTid();
//        String tid = "";
        String tid = tidRepository.find(id + "")
                .orElseThrow(() -> new Exception("결제 고유 번호가 존재하지 않습니다."));

        HttpHeaders headers = new HttpHeaders();
        String auth = "SECRET_KEY " + secretKey;

        /** 요청 헤더 */
        headers.set("Content-type", "application/json");
        headers.set("Authorization", auth);

        /** 요청 Body */
        PayRequest payRequest = makePayRequest.getApproveRequest(tid, id, pgToken);


        /** Header와 Body 합쳐서 RestTemplate로 보내기 위한 밑작업 */
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(payRequest.getMap(), headers);

        // 요청 보내기
        RestTemplate rt = new RestTemplate();
        PayApproveResDto payApproveResDto = rt.postForObject(payRequest.getUrl(), requestEntity, PayApproveResDto.class);

        tidRepository.delete(id + "");

        return payApproveResDto;
    }

}
