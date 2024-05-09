package com.coffee.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.coffee.model.Item;

public interface ItemRepo extends JpaRepository<Item, Integer> {

	@Query("select itemId from Item")
	public List<Integer> getIdList();

}
