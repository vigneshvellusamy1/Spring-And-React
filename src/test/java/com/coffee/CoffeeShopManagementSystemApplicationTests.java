package com.coffee;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.coffee.model.User;
import com.coffee.service.UserService;

@SpringBootTest
class CoffeeShopManagementSystemApplicationTests {
	
	
	@Autowired
	UserService service;
 
	@Test
//	@Ignore
	void testInsertUser() throws Exception {
		User user = new User();
		user.setUserId(10);
		user.setUserName("Abi");
		user.setMobNumber(6381645216l);
		
		boolean result = service.doInsertUser(user);
		assertEquals(true, result);
 
	}
	
//	@Test
//	void updationTest() {
//		Tariff tariff = new Tariff(10, "Premium",100, "new");
//		boolean result = service.doUpdateService(tariff);
//		assertEquals(true, result);
//	}
//
//	@Test
//	void deletionTest() {
//
//		boolean result = service.doDeleteService(10);
//		assertEquals(true, result);
//	}
	
	
 
}
 

	
	
	


