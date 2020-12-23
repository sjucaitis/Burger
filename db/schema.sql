-- Drops the burgers_db if it already exists --

drop database if exists burgers_db;

create database burgers_db;
use burgers_db; 

Create table burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);