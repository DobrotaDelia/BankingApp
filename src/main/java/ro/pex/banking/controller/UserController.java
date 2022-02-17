package ro.pex.banking.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ro.pex.banking.model.dto.UserDto;
import ro.pex.banking.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	private Logger LOG = LogManager.getLogger(UserController.class);
	@Autowired
	private UserService userService;
	
	
	@GetMapping
	public ResponseEntity<List<UserDto>> getUsers() {
		List<UserDto> users = userService.getAll();
		LOG.info("List of users: " + users.toString());
		return ResponseEntity.ok(users);
	}

}
