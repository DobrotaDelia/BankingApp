package ro.pex.banking.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ro.pex.banking.model.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> { 
	
	public Optional<UserEntity> findByUsernameAndPassword(String username, String password);
		
	
}
