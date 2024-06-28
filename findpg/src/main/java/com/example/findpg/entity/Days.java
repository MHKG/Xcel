package com.example.findpg.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "days")
public class Days {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int days_id;
	private String days;

	public int getDays_id() {
		return days_id;
	}

	public void setDays_id(int days_id) {
		this.days_id = days_id;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
	}

}
