package com.giveus.notification.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Table(name = "device")
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
public class Device {

    @Id
    @Column(name = "device_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int deviceNo;

    @Column(name = "member_no")
    private int memberNo;

    @Column(name = "device_token")
    private int deviceToken;

    @Column(name = "last_login_at")
    private int lastLoginAt;


}
