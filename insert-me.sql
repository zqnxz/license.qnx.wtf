CREATE TABLE licenses (
    id INT NOT NULL AUTO_INCREMENT,
    resource CHAR(35) NOT NULL,
    ip VARCHAR(20) DEFAULT NULL,
    webhook CHAR(35) NOT NULL,
    code longtext DEFAULT NULL,
    ending CHAR(25) NOT NULL,
    author CHAR(25) NOT NULL, 
    created_at CHAR(25) NOT NULL,   
    PRIMARY KEY(id) 
); 

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,  
    discord_id VARCHAR(50) DEFAULT NULL,
    username CHAR(35) DEFAULT NULL, 
    email CHAR(40) DEFAULT NULL,
    role CHAR(15) DEFAULT NULL, 
    status CHAR(20) NOT NULL DEFAULT 'Member',
    obfuscations int NOT NULL DEFAULT 0, 
    isBlacklisted int NOT NULL DEFAULT 0,
    PRIMARY KEY(id)  
); 

CREATE TABLE stores (
    id INT NOT NULL AUTO_INCREMENT,  
    owner CHAR(35) NOT NULL,
    discord_id VARCHAR(50) DEFAULT NULL,
    name CHAR(35) NOT NULL,
    domain CHAR(50) NOT NULL,
    created_at CHAR(25) NOT NULL, 
    PRIMARY KEY(id)  
)