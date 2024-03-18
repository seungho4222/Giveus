package com.giveus.funding.enums;

import lombok.Getter;

@Getter
public enum Gender {
    MALE('M'),
    FEMALE('F');
    private char name;

    Gender(char name) {
        this.name = name;
    }
}
