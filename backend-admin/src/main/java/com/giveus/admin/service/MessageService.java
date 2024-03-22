package com.giveus.admin.service;

import com.giveus.admin.entity.Funding;

public interface MessageService {

    void sendMessage(String phoneNumber, String regId);
}
