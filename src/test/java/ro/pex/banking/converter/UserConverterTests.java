package ro.pex.banking.converter;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.MatcherAssert.assertThat;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ro.pex.banking.model.converter.UserConverter;
import ro.pex.banking.model.dto.UserDto;
import ro.pex.banking.model.entity.UserEntity;

@SpringBootTest
public class UserConverterTests {
	
	@Autowired
	UserConverter userConverter;
	
	private UserDto userDto;
	private UserEntity userEntity;
	
	@BeforeEach
	public void setUp() {
		userDto = new UserDto(); //instantez ptr atribut de clasa userDto
		userDto.setUsername("user1");
		userDto.setPhone("0723456777");
		userDto.setPassword("pass");
		userDto.setLastName("Marinescu");
		userDto.setFirstName("Ion");
		userDto.setDateOfBirth(LocalDate.now()); //data curenta
		userDto.setEmail("email@yahoo.com");
		userEntity = new UserEntity();
		userEntity.setUsername("user1");
		userEntity.setPhone("0723456777");
		userEntity.setPassword("pass");
		userEntity.setLastName("Marinescu");
		userEntity.setFirstName("Ion");
		userEntity.setDateOfBirth(LocalDate.now()); //data curenta
		userEntity.setEmail("email@yahoo.com");

	}
	

	@Test
	void whenconverToDtoMethodisCalledThenResultisNotNull() {
		assertThat(userConverter.converToDto(userEntity), is(notNullValue())); 	
	
	}
	
	@Test
	void whenconverToDtoMethodisCalledThenInputIsEqualWithResult() {
		UserDto result = userConverter.converToDto(userEntity);
		assertThat(result.getLastName(), is(equalTo(userEntity.getLastName()))); 
		assertThat(result.getFirstName(), is(equalTo(userEntity.getFirstName())));
		assertThat(result.getPhone(), is(equalTo(userEntity.getPhone())));
		assertThat(result.getPassword(), is(equalTo(userEntity.getPassword())));
		assertThat(result.getDateOfBirth(), is(equalTo(userEntity.getDateOfBirth())));
		assertThat(result.getEmail(), is(equalTo(userEntity.getEmail())));
		assertThat(result.getId(), is((equalTo(userEntity.getId()))));

	}
	
	@Test
	void whenconverToDtoMethodisCalledWithInputNullThenResultisNull() {
		assertThat(userConverter.converToDto(null), is(nullValue())); 	
	
	}
	
	
	
	
	@Test
	void whenconverToEntityMethodisCalledThenResultisNotNull() {
		assertThat(userConverter.converToEntity(userDto), is(notNullValue())); 	
	
	}
	
	@Test
	void whenconverToEntityMethodisCalledThenInputIsEqualWithResult() {
		UserEntity result = userConverter.converToEntity(userDto);
		assertThat(result.getLastName(), is(equalTo(userDto.getLastName()))); 
		assertThat(result.getFirstName(), is(equalTo(userDto.getFirstName())));
		assertThat(result.getPhone(), is(equalTo(userDto.getPhone())));
		assertThat(result.getPassword(), is(equalTo(userDto.getPassword())));
		assertThat(result.getDateOfBirth(), is(equalTo(userDto.getDateOfBirth())));
		assertThat(result.getEmail(), is(equalTo(userDto.getEmail())));
		assertThat(result.getId(), is((equalTo(userDto.getId()))));

	}
	
	@Test
	void whenconverToEntityMethodisCalledWithInputNullThenResultisNull() {
		assertThat(userConverter.converToEntity(null), is(nullValue())); 	
	
	}

}
