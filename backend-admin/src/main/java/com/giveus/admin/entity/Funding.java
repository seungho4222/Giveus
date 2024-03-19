package com.giveus.admin.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;

import java.time.LocalDate;

@Entity
@Table(name = "funding")
@Getter
@Setter
@DynamicInsert
@NoArgsConstructor
public class Funding {

    @Id
    @Column(name = "funding_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int fundingNo;

    @Column(name = "issue_number")
    private String issueNumber;

    @Column(name = "registration_number")
    private String registrationNumber;

    @Column(name = "patient_name")
    private String patientName;

    @Column(name = "status")
    private String status;

    @Column(name = "birth")
    private LocalDate birth;

    @Column(name = "gender")
    private char gender;

    @Column(name = "disease_name")
    private String diseaseName;

    @Column(name = "disease_code")
    private String diseaseCode;

    @Column(name = "diagnosis_date")
    private LocalDate diagnosisDate;

    @Column(name="opinion")
    private String opinion;

    @Column(name="title")
    private String title;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "total_amount")
    private int totalAmount;

    @Column(name = "target_amount")
    private int targetAmount;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name="phone")
    private String phone;

    @Builder
    public Funding(String issueNumber, String registrationNumber, String patientName, String status, LocalDate birth, char gender, String diseaseName, String diseaseCode, LocalDate diagnosisDate, String opinion, String title, LocalDate startDate, LocalDate endDate, int totalAmount, int targetAmount, String phone) {
        this.issueNumber = issueNumber;
        this.registrationNumber = registrationNumber;
        this.patientName = patientName;
        this.status = status;
        this.birth = birth;
        this.gender = gender;
        this.diseaseName = diseaseName;
        this.diseaseCode = diseaseCode;
        this.diagnosisDate = diagnosisDate;
        this.opinion = opinion;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalAmount = totalAmount;
        this.targetAmount = targetAmount;
        this.phone = phone;
    }
}
