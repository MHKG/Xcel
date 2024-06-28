package com.example.findpg.service;

import com.example.findpg.entity.PG;
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
public class AddPG {

	@PersistenceContext
	private EntityManager entityManager;

	@Autowired
	private Environment environment;

	public boolean add(PG pg) {
		String insertUser = "insert into pg (pg_name, type, location) values (?, ?, ?)";
		Query query = entityManager.createNativeQuery(insertUser);
		query.setParameter(1, pg.getPg_name());
		query.setParameter(2, pg.getType());
		query.setParameter(3, pg.getLocation());
		query.executeUpdate();
		return true;
	}

	@SuppressWarnings("unchecked")
	public List<PG> getAll() {
		String getAll = "select * from pg";
		Query query = entityManager.createNativeQuery(getAll);
		return query.getResultList();
	}
}