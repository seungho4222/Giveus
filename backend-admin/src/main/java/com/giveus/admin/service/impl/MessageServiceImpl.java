package com.giveus.admin.service.impl;

import com.giveus.admin.service.MessageService;
import com.giveus.admin.util.SMSUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {
    private final SMSUtil smsUtil;

    @Override
    public void sendMessage(String phoneNumber, String regId) {
        smsUtil.send(phoneNumber, regId);
    }


}
