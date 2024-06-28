package com.example.form.service;

import com.example.form.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class AddUser {

	@PersistenceContext
	private EntityManager entityManager;

	@Autowired
	private Environment environment;

	public boolean add(String name, String email, int age, String phone_number) {
		String insertUser = "insert into user (name, email, age, phone_number) values (?, ?, ?, ?)";
		Query query = entityManager.createNativeQuery(insertUser);
		query.setParameter(1, name);
		query.setParameter(2, email);
		query.setParameter(3, age);
		query.setParameter(4, phone_number);
		query.executeUpdate();
		return true;
	}

	@SuppressWarnings("unchecked")
	public List<User> getAll() {
		String getAll = "select * from user";
		Query query = entityManager.createNativeQuery(getAll);
		return query.getResultList();
	}
}