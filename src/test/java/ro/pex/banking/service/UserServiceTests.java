package ro.pex.banking.service;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.instanceOf;
import static org.hamcrest.Matchers.isA;

import ro.pex.banking.model.dto.UserDto;

@SpringBootTest
public class UserServiceTests {
	
	@Autowired
	private UserService userService;
	
	@Test
	void whengetAllMethodisCalledThenReturnListofUsersDto() {
		assertThat(userService.getAll(), instanceOf(List.class)); //sa fie lista	
	
	}
	
	@Test
	void whengetAllMethodisCalledThenResultisNotNull() {
		assertThat(userService.getAll(), is(notNullValue())); 	
	
	}
	
//	@Test
//	void whengetUserByUsernameAndPasswordThenResult() {
//		String username, password;
//		assertThat(userService.getUserByUsernameAndPassword(username, password), )); 	
//	
//	}
	
	
}
