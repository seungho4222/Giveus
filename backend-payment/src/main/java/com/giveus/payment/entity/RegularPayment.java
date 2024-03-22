package com.giveus.payment.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Table(name = "regular_payment")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@ToString
@EqualsAndHashCode(of = {"regularPaymentNo"}, callSuper = false)
public class RegularPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "regular_payment_no")
    private Integer regularPaymentNo;

    @Column(name = "member_no")
    private Integer memberNo;

    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "method")
    private String method;

    @Column(name = "amount")
    private Integer amount;

}
