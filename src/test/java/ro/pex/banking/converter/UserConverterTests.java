package ro.pex.banking.converter;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.MatcherAssert.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ro.pex.banking.model.converter.UserConverter;
import ro.pex.banking.model.entity.UserEntity;

@SpringBootTest
public class UserConverterTests {
	
	@Autowired
	UserConverter userConverter;
	@Autowired
	UserEntity userEntity;
	

	@Test
	void whenconverToDtoMethodisCalledThenResultisNotNull() {
		assertThat(userConverter.converToDto(userEntity), is(notNullValue())); 	
	
	}

}
