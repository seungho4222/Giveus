package com.giveus.funding.global.common.enums;

import lombok.Getter;

@Getter
public enum Folder {
    FUNDING("펀딩"),
    REVIEW("리뷰");
    private final String name;

    Folder(String name) {
        this.name = name;
    }
}
