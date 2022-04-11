package ro.pex.banking.dto;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.*;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import ro.pex.banking.model.dto.LoginRequestDto;
import static org.hamcrest.Matchers.empty;

@SpringBootTest
public class LoginRequestDtoTests {

	@Test
	void whenLoginObjectIsBuildThenLoginValidationPasses() {
		LoginRequestDto loginRequestDto = new LoginRequestDto();
		loginRequestDto.setPassword("pass");
		loginRequestDto.setUsername("usern");
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<LoginRequestDto>> violations = validator.validate(loginRequestDto);
		assertThat(violations, is((empty())));

	}

	@Test
	void whenLoginObjectIsBuildWithPasswordNullThenLoginValidationNotPasses() {
		LoginRequestDto loginRequestDto = new LoginRequestDto();
		loginRequestDto.setPassword(null);
		loginRequestDto.setUsername("usern");
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<LoginRequestDto>> violations = validator.validate(loginRequestDto);
		assertThat(violations, is(not(empty())));

	}

	@Test
	void whenLoginObjectIsBuildWithPasswordEmptyThenLoginValidationNotPasses() {
		LoginRequestDto loginRequestDto = new LoginRequestDto();
		loginRequestDto.setPassword("");
		loginRequestDto.setUsername("usern");
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<LoginRequestDto>> violations = validator.validate(loginRequestDto);
		assertThat(violations, is(not(empty())));

	}

	@Test
	void whenLoginObjectIsBuildWithUsernameNullThenLoginValidationNotPasses() {
		LoginRequestDto loginRequestDto = new LoginRequestDto();
		loginRequestDto.setUsername(null);
		loginRequestDto.setPassword("pass");
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<LoginRequestDto>> violations = validator.validate(loginRequestDto);
		assertThat(violations, is(not(empty())));

	}

	@Test
	void whenLoginObjectIsBuildWithUsernamedEmptyThenLoginValidationNotPasses() {
		LoginRequestDto loginRequestDto = new LoginRequestDto();
		loginRequestDto.setUsername("");
		loginRequestDto.setPassword("pass");
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<LoginRequestDto>> violations = validator.validate(loginRequestDto);
		assertThat(violations, is(not(empty())));

	}

	@Test
	void whenLoginObjectIsBuildWithUsernameAdPassWordEmptyThenLoginValidationNotPasses() {
		LoginRequestDto loginRequestDto = new LoginRequestDto();
		loginRequestDto.setUsername("");
		loginRequestDto.setPassword("");
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<LoginRequestDto>> violations = validator.validate(loginRequestDto);
		assertThat(violations, is(not(empty())));

	}

	@Test
	void whenLoginObjectIsBuildWithUsernameAdPassWordNullThenLoginValidationNotPasses() {
		LoginRequestDto loginRequestDto = new LoginRequestDto();
		loginRequestDto.setUsername(null);
		loginRequestDto.setPassword(null);
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();
		Set<ConstraintViolation<LoginRequestDto>> violations = validator.validate(loginRequestDto);
		assertThat(violations, is(not(empty())));

	}

}
