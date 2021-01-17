package org.kenavo.authQuiz.repositories;

import org.kenavo.authQuiz.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {
  User findByUsername(String username);
}
