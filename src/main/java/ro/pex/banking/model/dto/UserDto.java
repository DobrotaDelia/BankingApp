package ro.pex.banking.model.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;


public class UserDto {

	@JsonIgnore
	private int id;

	private String lastName;

	private String firstName;

	@JsonIgnore
	private String username;

	@JsonIgnore
	private String password;

	private String phone;

	private String email;

	private LocalDate dateOfBirth;

	public int getId() {
		return id;
	}

	@Override
	public String toString() {
		return "UserDto [id=" + id + ", lastName=" + lastName + ", firstName=" + firstName + ", username=" + username
				+ ", password=" + password + ", phone=" + phone + ", email=" + email + ", dateOfBirth=" + dateOfBirth
				+ "]";
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

}
