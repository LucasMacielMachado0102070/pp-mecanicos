create database mecanicasdb;
use mecanicasdb;

CREATE TABLE `nomes` (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  senha varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY nome (nome),
  UNIQUE KEY senha (senha)
);


CREATE TABLE produtos (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  valor float NOT NULL,
  imagem varchar(225) DEFAULT NULL,
  PRIMARY KEY (id)
);


INSERT INTO nomes VALUES (1,'Lucas','Lucas');

drop database nomes, produtos;