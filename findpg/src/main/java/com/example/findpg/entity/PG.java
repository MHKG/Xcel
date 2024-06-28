package com.example.findpg.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pg")
public class PG {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pg_id;
	@Column private String pg_name;
	@Column private String type;
	@Column private String location;
	@Column private float latitude;
	@Column private float longitude;
	@Column private String description;
	@Column private float deposit;
	@Column private String notice_period;
	@Column private float maintenance;
	@Column private String electric_charges;
	@Column private String ac;
	@Column private String food_availability;
	@Column private String backup;
	@Column private String parking;
	@Column private String cleaning;
	@Column private String washroom;

	public int getPg_id() {
		return pg_id;
	}

	public void setPg_id(int pg_id) {
		this.pg_id = pg_id;
	}

	public String getPg_name() {
		return pg_name;
	}

	public void setPg_name(String pg_name) {
		this.pg_name = pg_name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public float getLatitude() {
		return latitude;
	}

	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}

	public float getLongitude() {
		return longitude;
	}

	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getDeposit() {
		return deposit;
	}

	public void setDeposit(float deposit) {
		this.deposit = deposit;
	}

	public String getNotice_period() {
		return notice_period;
	}

	public void setNotice_period(String notice_period) {
		this.notice_period = notice_period;
	}

	public float getMaintenance() {
		return maintenance;
	}

	public void setMaintenance(float maintenance) {
		this.maintenance = maintenance;
	}

	public String getElectric_charges() {
		return electric_charges;
	}

	public void setElectric_charges(String electric_charges) {
		this.electric_charges = electric_charges;
	}

	public String getAc() {
		return ac;
	}

	public void setAc(String ac) {
		this.ac = ac;
	}

	public String getFood_availability() {
		return food_availability;
	}

	public void setFood_availability(String food_availability) {
		this.food_availability = food_availability;
	}

	public String getBackup() {
		return backup;
	}

	public void setBackup(String backup) {
		this.backup = backup;
	}

	public String getParking() {
		return parking;
	}

	public void setParking(String parking) {
		this.parking = parking;
	}

	public String getCleaning() {
		return cleaning;
	}

	public void setCleaning(String cleaning) {
		this.cleaning = cleaning;
	}

	public String getWashroom() {
		return washroom;
	}

	public void setWashroom(String washroom) {
		this.washroom = washroom;
	}
}
