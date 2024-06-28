package com.example.findpg.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "food_menu")
public class Food_menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int food_menu_id;
	private String breakfast;
	private String lunch;
	private String dinner;

	public int getFood_menu_id() {
		return food_menu_id;
	}

	public void setFood_menu_id(int food_menu_id) {
		this.food_menu_id = food_menu_id;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getLunch() {
		return lunch;
	}

	public void setLunch(String lunch) {
		this.lunch = lunch;
	}

	public String getDinner() {
		return dinner;
	}

	public void setDinner(String dinner) {
		this.dinner = dinner;
	}
}
