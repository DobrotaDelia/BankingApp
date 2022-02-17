package ro.pex.banking.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ro.pex.banking.model.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> { 
	

}
