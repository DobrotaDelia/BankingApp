package ro.pex.banking.model.converter;

import org.springframework.stereotype.Component;

import ro.pex.banking.model.dto.UserDto;
import ro.pex.banking.model.entity.UserEntity;

@Component
public class UserConverter {

	public UserDto converToDto(UserEntity userEntity) {

		UserDto userDto = null;
		if (userEntity != null) {
			userDto = new UserDto();
			userDto.setId(userEntity.getId());
			userDto.setLastName(userEntity.getLastName());
			userDto.setFirstName(userEntity.getFirstName());
			userDto.setDateOfBirth(userEntity.getDateOfBirth());
			userDto.setEmail(userEntity.getEmail());
			userDto.setPhone(userEntity.getPhone());
			userDto.setUsername(userEntity.getUsername());
			userDto.setPassword(userEntity.getPassword());

		}
		return userDto;

	}

	public UserEntity converToEntity(UserDto userDto) {

		UserEntity result = null;
		if (userDto != null) {
			result = new UserEntity();
			result.setLastName(userDto.getLastName());
			result.setFirstName(userDto.getFirstName());
			result.setDateOfBirth(userDto.getDateOfBirth());
			result.setEmail(userDto.getEmail());
			result.setPhone(userDto.getPhone());
			result.setUsername(userDto.getUsername());
			result.setPassword(userDto.getPassword());

		}
		return result;

	}

}
