CREATE TABLE `users` (
  `id` BINARY(16) NOT NULL,
  `id_str` VARCHAR(36) NOT NULL,
  `auth_id` VARCHAR(100) NOT NULL ,
  `created_at` DATETIME DEFAULT NULL,
  `updated_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;