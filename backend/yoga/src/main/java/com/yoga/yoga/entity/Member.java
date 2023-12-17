package com.yoga.yoga.entity;

import java.time.LocalDate;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Embedded
    private Name name;
    private String email;
    private LocalDate dob;
    private LocalDate doj;
    private LocalDate dateOfChange;
    private String contactno;
    private String paidMonth;
    private String gender;
    private String city;
    private String currBatch;
    private String nextBatch;

    public Member() {
    }

    public Member(Name name, String email, LocalDate dob, LocalDate doj, LocalDate dateOfChange, String contactno,
            String paidMonth, String gender, String city, String currBatch, String nextBatch) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.doj = doj;
        this.dateOfChange = dateOfChange;
        this.contactno = contactno;
        this.paidMonth = paidMonth;
        this.gender = gender;
        this.city = city;
        this.currBatch = currBatch;
        this.nextBatch = nextBatch;
    }

    @Override
    public String toString() {
        return "Member [id=" + id + ", name=" + name + ", email=" + email + ", dob=" + dob + ", doj=" + doj
                + ", dateOfChange=" + dateOfChange + ", contactno=" + contactno + ", paidMonth=" + paidMonth
                + ", gender=" + gender + ", city=" + city + ", currBatch=" + currBatch + ", nextBatch=" + nextBatch
                + "]";
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public LocalDate getDoj() {
        return doj;
    }

    public void setDoj(LocalDate doj) {
        this.doj = doj;
    }

    public LocalDate getDateOfChange() {
        return dateOfChange;
    }

    public void setDateOfChange(LocalDate dateOfChange) {
        this.dateOfChange = dateOfChange;
    }

    public String getContactno() {
        return contactno;
    }

    public void setContactno(String contactno) {
        this.contactno = contactno;
    }

    public String getPaidMonth() {
        return paidMonth;
    }

    public void setPaidMonth(String paidMonth) {
        this.paidMonth = paidMonth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCurrBatch() {
        return currBatch;
    }

    public void setCurrBatch(String currBatch) {
        this.currBatch = currBatch;
    }

    public String getNextBatch() {
        return nextBatch;
    }

    public void setNextBatch(String nextBatch) {
        this.nextBatch = nextBatch;
    }

}
