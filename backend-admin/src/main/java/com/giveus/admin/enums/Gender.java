package com.giveus.admin.enums;

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
