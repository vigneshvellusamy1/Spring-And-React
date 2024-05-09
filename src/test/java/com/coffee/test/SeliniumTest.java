//package com.coffee.test;
//
//import org.junit.jupiter.api.Test;
//import org.openqa.selenium.Alert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.Select;
//
//public class SeliniumTest {
//
//	WebDriver driver;
//
//	@Test
//	public void test() throws InterruptedException {
//		driver = new ChromeDriver();
//
//	driver.get("http://localhost:3000/");
//	driver.findElement(By.linkText("Add User")).click();
	
	
//	WebElement r=driver.findElement(By.name("userName"));
//	r.sendKeys("Surya");
//	Thread.sleep(2000);
	
//	WebElement r1=driver.findElement(By.name("mobNumber"));
//	r1.sendKeys("7896541256");
//	Thread.sleep(2000);
//	
//	Select objSelect =new Select(driver.findElement(By.name("itemId")));
//	objSelect.selectByVisibleText("9");
//	
//	driver.findElement(By.name("InsertUser")).click();
//	
//	Alert alert = driver.switchTo().alert();
//	alert.accept();
	

//	driver.get("http://localhost:3000/homelib");
//	driver.findElement(By.linkText("Add Item")).click();
//
//		WebElement r2 = driver.findElement(By.name("itemName"));
//	r2.sendKeys("Green coffee");
//		Thread.sleep(2000);
//
//		WebElement r3 = driver.findElement(By.name("itemPrice"));
//		r3.sendKeys("200");
//		Thread.sleep(2000);
//
//	driver.findElement(By.name("Insert")).click();
//
//		Alert alert1 = driver.switchTo().alert();
//		alert1.accept();
//	
//	
//	driver.get("http://localhost:3000/");
//	
//	driver.findElement(By.id("remove22")).click();
//	
//	driver.switchTo().alert().accept();
		
		
//
//	}
//}
