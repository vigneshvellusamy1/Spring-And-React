package com.coffee.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.coffee.model.User;
import com.coffee.repositary.ItemRepo;
import com.coffee.repositary.UserRepo;
import com.coffee.service.UserService;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

	@Autowired
	UserService serv;
	
	@Autowired
	UserRepo repo;


	

	@PostMapping("/Userinsert")
	public String getIns(@RequestBody User use) {

		String msg = "";
		try {
			serv.doInsertUser(use);
			msg = "Object inserted";
		} catch (Exception e) {
			msg = "Object not inserted";
		}
		return msg;
	}

	@GetMapping("/Userfindall")
	public List<User> getAll() {

		return repo.findAll();
	}

	@DeleteMapping("/Userdelete/{uid}")
	public String getDel(@PathVariable int uid) {

		String msg = "";
		try {
			repo.deleteById(uid);
			msg = "Object deleted";
		} catch (Exception e) {
			msg = "Object not deleted";
		}
		return msg;
	}

	@PutMapping("/Userupdate")
	public String getUpd(@RequestBody User use) {

		String msg = "";
		try {
			//repo.save(use);
			msg = "Object updated";
		} catch (Exception e) {
			msg = "Object not updated";
		}
		return msg;
	}

	//@GetMapping("/Userfind/{uid}")
	//public Optional<User> getFind(@PathVariable int uid) 
	{
		//return repo.findById(uid);
	}

//	@GetMapping("/Autopopuplid")
//	public List<Integer> getId() {
		//return Irepo.getIdList();
	}
//}

