CREATE DATABASE burgers_db; 

USE burgers_db;

CREATE TABLE burgers (
    ID int AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN, 
    PRIMARY KEY (ID)
);