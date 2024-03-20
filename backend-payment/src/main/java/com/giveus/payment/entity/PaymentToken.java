package com.giveus.payment.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
    @Column(name = "member_no")
    private Integer memberNo;

    @Column(name = "sid")
    private String sid;

    @Column(name = "billing_key")
    private String billingKey;
}
