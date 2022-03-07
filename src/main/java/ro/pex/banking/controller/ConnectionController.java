package ro.pex.banking.controller;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ro.pex.banking.exception.WrongCredentialsException;
import ro.pex.banking.i18n.I18nService;
import ro.pex.banking.i18n.MessagesKeys;
import ro.pex.banking.model.dto.LoginRequestDto;
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
	
	@Autowired
	private I18nService i18nService;
	
	@PostMapping("/login")
	public ResponseEntity<ResponseDto> login (@RequestBody @Valid LoginRequestDto loginResponseDto){
		UserDto userDto=null;
		try {
			userDto=userService.getUserByUsernameAndPassword(loginResponseDto.getUsername(), loginResponseDto.getPassword());
		}
		catch(WrongCredentialsException e){
			
			
			return ResponseUtils.error(HttpStatus.NOT_FOUND, i18nService.getTranslation(MessagesKeys.API_LOGIN_ERROR));

		}
		
		
		return ResponseUtils.info(HttpStatus.OK, null, userDto);
		
	}

}
