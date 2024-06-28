package com.example.findpg.service;

import com.example.findpg.entity.Images;
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
public class AddImage {

	@PersistenceContext
	private EntityManager entityManager;

	@Autowired
	private Environment environment;

	public boolean add(Images image) {
		String insertUser = "insert into images (image) values (?)";
		Query query = entityManager.createNativeQuery(insertUser);
		query.setParameter(1, image.getImage());
		query.executeUpdate();
		return true;
	}

	@SuppressWarnings("unchecked")
	public List<Images> getAll() {
		String getAll = "select * from images";
		Query query = entityManager.createNativeQuery(getAll);
		return query.getResultList();
	}
}