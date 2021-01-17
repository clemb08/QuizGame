package org.kenavo.authQuiz.controllers;

import org.kenavo.authQuiz.models.User;
import org.kenavo.authQuiz.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="api/register")
public class UserController {

  @Autowired
  private UserRepository userRepo;

  private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  @PostMapping(path="/add", produces = MediaType.APPLICATION_JSON_VALUE)
  @ResponseStatus(HttpStatus.OK)
  @ResponseBody
  public User addUser(@RequestBody User user) {

    String pass = user.getPassword();
    user.setPassword(passwordEncoder.encode(pass));
    userRepo.save(user);
    return user;
  }

}
