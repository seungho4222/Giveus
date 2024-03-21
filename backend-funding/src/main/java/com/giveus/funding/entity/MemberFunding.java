package com.giveus.funding.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.aot.generate.GeneratedTypeReference;

import java.lang.reflect.Member;
import java.time.LocalDate;

@Entity
@Table(name = "member_funding")
@Getter
@Setter
@DynamicInsert
@NoArgsConstructor
public class MemberFunding {

    @Id
    @Column(name = "member_funding_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberFundingNo;

    @Column(name = "member_no")
    private int memberNo;

    @ManyToOne
    @JoinColumn(name = "funding_no")
    private Funding funding;

    @Column(name = "payment_no")
    private int paymentNo;

    @Column(name = "point_no")
    private int pointNo;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "amount")
    private int amount;

    @Column(name = "is_public")
    private Boolean isPublic;
}
