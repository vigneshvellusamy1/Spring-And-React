package com.coffee.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coffee.model.User;


public interface UserRepo extends JpaRepository<User, Integer>{

}

