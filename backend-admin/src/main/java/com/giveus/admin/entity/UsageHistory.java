package com.giveus.admin.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "usage_history")
@Getter
@NoArgsConstructor
public class UsageHistory {

    @Id
    @Column(name = "usage_history_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int usageHistoryNo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "funding_no")
    private Funding funding;

    @Column(name = "category")
    private String category;

    @Column(name = "content")
    private String content;

    @Column(name = "amount")
    private int amount;

    @Column(name = "count")
    private int count;

    @Builder
    public UsageHistory(Funding funding, String category, String content, int amount, int count) {
        this.funding = funding;
        this.category = category;
        this.content = content;
        this.amount = amount;
        this.count = count;
    }
}
