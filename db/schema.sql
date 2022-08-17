DROP DATABASE IF EXISTS judge_my_stuff_db;
CREATE DATABASE judge_my_stuff_db;

CREATE TABLE `judge_my_stuff_db`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `profile_image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));