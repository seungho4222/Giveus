package com.giveus.payment.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "payment_token")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@ToString
@EqualsAndHashCode(of = {"memberNo"}, callSuper = false)
public class PaymentToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_token_no")
    private Integer paymentTokenNo;

    @Column(name = "member_no")
    private Integer memberNo;

    @Column(name = "sid")
    private String sid;

    @Column(name = "billing_key")
    private String billingKey;
}
