package com.giveus.notification.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;

@Entity
@Table(name = "notification")
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@DynamicInsert
public class Notification {

    @Id
    @Column(name = "notification_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int notificationNo;

    // 연관관계 매핑
//    @ManyToOne
//    @JoinColumn(name = "member_no")
//    private Member member;

//    @Column(name = "meber_no")
//    private int memberNo;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private String category;

    @Column(name = "content")
    private String content;

    @Column(name = "detail")
    private String detail;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "is_read", columnDefinition = "TINYINT(1)")
    @ColumnDefault("false")
    private boolean isRead;


}
