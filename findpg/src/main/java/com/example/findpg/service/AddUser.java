package com.example.findpg.service;

import com.example.findpg.entity.User;
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

	public boolean add(String name, String email, String phone_number, String address, List<String> languages, int image_id) {
		String insertUser = "insert into user (name, email, phone_number, address, languages, image_id) values (?, ?, ?, ?, ?, ?)";
		Query query = entityManager.createNativeQuery(insertUser);
		query.setParameter(1, name);
		query.setParameter(2, email);
		query.setParameter(3, phone_number);
		query.setParameter(4, address);
		query.setParameter(5, languages);
		query.setParameter(6, image_id);
		query.executeUpdate();
		return true;
	}

	@SuppressWarnings("unchecked")
	public List<User> getAll() {
		String getAll = "select * from user";
		Query query = entityManager.createNativeQuery(getAll);
		return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	public List<User> getByPhoneNumber(String phone_number) {
		String getAll = "select * from user where phone_number = ?";
		Query query = entityManager.createNativeQuery(getAll);
		query.setParameter(1, phone_number);
		return query.getResultList();
	}
}