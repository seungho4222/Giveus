package com.giveus.admin.service;

import com.giveus.admin.dto.request.AdminJoinPostReq;
import com.giveus.admin.dto.response.AdminInfoRes;
import com.giveus.admin.entity.Admin;

import jakarta.servlet.http.HttpServletRequest;

import java.util.Optional;

public interface AdminService {

    AdminInfoRes updateAdmin(AdminJoinPostReq adminJoinPostReq);

    Optional<Admin> findByProviderAndKey(String provider, String key);

    AdminInfoRes findByAdminNo(int adminNo);

    AdminInfoRes findByAccessToken(HttpServletRequest httpRequest);

}
