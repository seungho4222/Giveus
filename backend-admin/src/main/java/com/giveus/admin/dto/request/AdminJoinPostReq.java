package com.giveus.admin.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@ToString
public class AdminJoinPostReq {

    private String email;

    private String provider;

    private String name;

}
