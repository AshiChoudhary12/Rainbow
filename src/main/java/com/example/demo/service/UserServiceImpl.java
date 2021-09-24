package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
@Service
public class UserServiceImpl implements UserService {
	
	List<User> list= List.of(
			new User(147L,"Ashi","787897578"),
			new User(148L,"Rashi","787897578"),
			new User(149L,"Bhanu","787897578")
			);

	@Override
	public User getUser(Long id) {
		return list.stream().
				filter(user -> user.getUserId().equals(id)).findAny().orElse(null);
	}

}
