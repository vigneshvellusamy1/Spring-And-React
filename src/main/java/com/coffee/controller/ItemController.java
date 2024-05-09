package com.coffee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.coffee.model.*;
import com.coffee.repositary.ItemRepo;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemController {

	private ItemRepo repo;

	public ItemController(ItemRepo repo) {
		super();
		this.repo = repo;
	}

	@PostMapping("/Iteminsert")
	public String getIns(@RequestBody Item insert) {

		String msg = "";
		try {
			repo.save(insert);
			msg = "Object inserted";
		} catch (Exception e) {
			msg = "Object not inserted";
		}
		return msg;
	}

	@GetMapping("/Itemfindall")
	public List<Item> getAll() {
		return repo.findAll();

	}

	@DeleteMapping("/Itemdelete/{itemId}")
	public String getDel(@PathVariable int itemId) {

		String msg = "";
		try {
			repo.deleteById(itemId);
			msg = "Object deleted";
		} catch (Exception e) {
			msg = "Object not deleted";
		}
		return msg;
	}

	@PutMapping("/Itemupdated")
	public String getUpd(@RequestBody Item item) {

		String msg = "";
		try {
			repo.save(item);
			msg = "Object updated";
		} catch (Exception e) {
			msg = "Object not updated";
		}
		return msg;
	}

	@GetMapping("/Itemfind/{item}")
	public Optional<Item> getFind(@PathVariable int item) {

		return repo.findById(item);
	}
	
	@GetMapping("Autopopuplid")
	public List<Integer> findAllId(){
		return repo.getIdList();
	}

}
