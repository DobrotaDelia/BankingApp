package ro.pex.banking.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.file.Files;
import java.util.List;

import javax.mail.MessagingException;
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
import ro.pex.banking.model.dto.EmailAttachmentDto;
import ro.pex.banking.model.dto.EmailDto;
import ro.pex.banking.model.dto.LoginRequestDto;
import ro.pex.banking.model.dto.UserDto;
import ro.pex.banking.model.dto.response.ResponseDto;
import ro.pex.banking.model.dto.response.StatusDto;
import ro.pex.banking.model.dto.response.utils.ResponseUtils;
import ro.pex.banking.service.UserService;
import ro.pex.banking.service.email.EmailService;
import ro.pex.banking.service.i18n.I18nService;
import ro.pex.banking.service.i18n.MessagesKeys;



@RestController
@RequestMapping("/api/auth")
public class ConnectionController {
	private Logger logger = LogManager.getLogger(ConnectionController.class);
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private I18nService i18nService;
	
	@PostMapping("/login")
	public ResponseEntity<ResponseDto> login (@RequestBody @Valid LoginRequestDto loginResponseDto){
		UserDto userDto=null;
		try {
			userDto=userService.getUserByUsernameAndPassword(loginResponseDto.getUsername(), loginResponseDto.getPassword());
			testEmail();
		}
		catch(WrongCredentialsException | IOException | MessagingException e){
			
			
			return ResponseUtils.error(HttpStatus.NOT_FOUND, i18nService.getTranslation(MessagesKeys.API_LOGIN_ERROR));

		}
		
		
		return ResponseUtils.info(HttpStatus.OK, null, userDto);
		
	}

	/**
	 * Method - Test to check if an email can be send
	 * @return void
	 **/
	private void testEmail() throws IOException, MessagingException, UnsupportedEncodingException {
		EmailDto mail = new EmailDto();
		mail.setFrom("dobrota.delia@gmail.com");
		mail.setTo("dobrota.delia@gmail.com");
		mail.setSubject("Spring Boot - Email Example");
		mail.setContent("<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>");
		String path1 = "C:\\Users\\delia.dobrota\\Downloads\\sample3.txt";

		mail.setAttachments(List.of(
		new EmailAttachmentDto("bla", Files.readAllBytes(new File(path1).toPath())),
		new EmailAttachmentDto("bla1", Files.readAllBytes(new File(path1).toPath())),
		new EmailAttachmentDto("bla2", Files.readAllBytes(new File(path1).toPath()))));

		emailService.sendEmail(mail);
	}

}
