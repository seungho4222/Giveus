package com.giveus.admin.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "funding_detail")
@Getter
@Setter
@NoArgsConstructor
public class FundingDetail {

    @Id
    private int fundingNo;

    @MapsId
    @OneToOne
    @JoinColumn(name = "funding_no")
    private Funding funding;

    @Column(name = "content")
    private String content;

    @Column(name = "thumbnail_url")
    private String thumbnailUrl;

}
