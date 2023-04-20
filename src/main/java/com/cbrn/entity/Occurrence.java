package com.cbrn.entity;


import javax.persistence.*;
import java.awt.geom.Point2D;

@Entity
@Table(name = "Occurrence")
public class Occurrence {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    private int occId;
    private String occType;
    private Point2D.Float coordinates;

    public int getOccId() {
        return occId;
    }

    public String getOccType() {
        return occType;
    }

    public Point2D.Float getCoordinates() {
        return coordinates;
    }

    public void setOccId(int occId) {
        this.occId = occId;
    }

    public void setOccType(String occType) {
        this.occType = occType;
    }

    public void setCoordinates(Point2D.Float coordinates) {
        this.coordinates = coordinates;
    }
}
