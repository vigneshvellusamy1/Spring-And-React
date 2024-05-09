package com.coffee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coffee.model.User;
import com.coffee.repositary.UserRepo;

@Service
public class UserService {
 
    @Autowired
    UserRepo urepo;
    
    public boolean doInsertUser(User user) {
    	try {
    		urepo.save(user);
    		return true;
    		
    	}catch(Exception e) {
    		System.out.println(e);
    		return false;
    	}
    }
 
    public User saveUser(User user) {
        return urepo.save(user);
    }
 
    public List<User> getAllUser() {
        return urepo.findAll();
    }
 
    public Optional<User> getUserById(int id) {
        return urepo.findById(id);
    }
 
//    public void deleteTariff(int id) {
//    	trepo.deleteById(id);
//    }
    public boolean doDeleteService(int id) {
		try {
			urepo.deleteById(id);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
 
    public boolean doUpdateService(User user) {
		try {
			urepo.save(user);
			return true;
 
		} catch (Exception e) {
 
			return false;
		}
 
	}
//    public Tariff updateTariff(Tariff tariff) {
//        return trepo.save(tariff);
//    }
}
 
    		
