package ro.pex.banking.entity;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ro.pex.banking.model.entity.AbstractEntity;
import ro.pex.banking.model.entity.UserEntity;
import ro.pex.banking.service.UserService;

@SpringBootTest
public class UserEntityTests {
	
	@Autowired
	private UserEntity userEntity;
	
//	@Test
//	void whengetIdMethodIsCalledNotNull() {
//		assertThat(userEntity.getId(), is(notNullValue())); 	
//	
//	}

}
