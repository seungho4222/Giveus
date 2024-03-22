package com.giveus.admin.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "admin_funding")
@Getter
@Setter
@NoArgsConstructor
public class AdminFunding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adminFundingNo;

    @ManyToOne
    @JoinColumn(name = "funding_no")
    private Funding funding;

    @Column(name = "admin_no")
    private int adminNo;

}
