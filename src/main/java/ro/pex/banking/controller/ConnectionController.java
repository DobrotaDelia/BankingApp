package ro.pex.banking.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ro.pex.banking.exception.WrongCredentialsException;
import ro.pex.banking.model.dto.LoginResponseDto;
import ro.pex.banking.model.dto.UserDto;
import ro.pex.banking.model.dto.response.ResponseDto;
import ro.pex.banking.model.dto.response.StatusDto;
import ro.pex.banking.model.dto.response.utils.ResponseUtils;
import ro.pex.banking.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class ConnectionController {
	private Logger logger = LogManager.getLogger(ConnectionController.class);

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/")
	public String index() {
	return "index";
	}

	@PostMapping("/login")
	public ResponseEntity<ResponseDto> login(@RequestBody LoginResponseDto loginResponseDto) {
		UserDto userDto = null;
		try {
			userDto = userService.getUserByUsernameAndPassword(loginResponseDto.getUsername(),
					loginResponseDto.getPassword());
		} catch (WrongCredentialsException e) {

			return ResponseUtils.error(HttpStatus.NOT_FOUND, "Login not successfull");

		}

		return ResponseUtils.info(HttpStatus.OK, "Login successfully", userDto);

	}

}
