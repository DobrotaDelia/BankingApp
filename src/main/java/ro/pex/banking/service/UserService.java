package ro.pex.banking.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import ro.pex.banking.model.converter.UserConverter;
import ro.pex.banking.model.dto.UserDto;
import ro.pex.banking.model.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserConverter userConverter;
	
	
	
	public List<UserDto> getAll(){
		return userRepository.findAll().stream().map(userConverter::converToDto).collect(Collectors.toList());
		
		
	}
	

}
