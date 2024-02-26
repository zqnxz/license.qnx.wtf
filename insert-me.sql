CREATE TABLE `licenses` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `resource` VARCHAR(255) NOT NULL,
    `ip` VARCHAR(255) DEFAULT NULL,
    `webhook` VARCHAR(255) NOT NULL,
    `code` longtext DEFAULT NULL,
    `ending` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL, 
    `created_at` VARCHAR(255) NOT NULL,   
    PRIMARY KEY(`id`)
);

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,  
    `discord_id` VARCHAR(255) DEFAULT NULL,
    `username` VARCHAR(255) DEFAULT NULL, 
    `email` VARCHAR(255) DEFAULT NULL,
    `role` VARCHAR(255) DEFAULT NULL, 
    `status` VARCHAR(255) NOT NULL DEFAULT 'Member',
    `obfuscations` int NOT NULL DEFAULT 0, 
    `isBlacklisted` int NOT NULL DEFAULT 0,
    PRIMARY KEY(`id`)  
); 

CREATE TABLE news (
    id INT NOT NULL AUTO_INCREMENT,
    discord_id VARCHAR(255) DEFAULT NULL,
    author VARCHAR(255) DEFAULT NULL, 
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) DEFAULT NULL,
    image VARCHAR(255) DEFAULT NULL,
    product_link VARCHAR(255) DEFAULT NULL,
    preview VARCHAR(255) DEFAULT NULL,
    created_at VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);