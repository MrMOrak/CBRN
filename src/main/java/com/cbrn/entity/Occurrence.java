package com.cbrn.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "occurrence")
public class Occurrence {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "occurrence_seq")
    @SequenceGenerator(name = "occurrence_seq")
    @Column(name = "id", nullable = false)
    private Integer id;

    private String monitorName;

    private Date occurredAt;

    private float intensity;

    private String occType;

    private float lng;

    private float lat;
    public String getMonitorName() {
        return monitorName;
    }

    public void setMonitorName(String monitorName) {
        this.monitorName = monitorName;
    }

    public Date getOccurredAt() {
        return occurredAt;
    }

    public void setOccurredAt(Date occurredAt) {
        this.occurredAt = occurredAt;
    }

    public float getIntensity() {
        return intensity;
    }

    public void setIntensity(float intensity) {
        this.intensity = intensity;
    }

    public float getLng() {
        return lng;
    }

    public void setLng(float lng) {
        this.lng = lng;
    }

    public float getLat() {
        return lat;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }


    public String getOccType() {
        return occType;
    }

    public void setOccType(String occType) {
        this.occType = occType;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}