

create database mecanicasdb;
use mecanicasdb;

CREATE TABLE nomes (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  senha varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY nome (nome),
  UNIQUE KEY senha (senha)
) 

select * from nomes;

CREATE TABLE produtos (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(255) NOT NULL,
  valor float NOT NULL,
  imagem varchar(225) DEFAULT NULL,
  created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE dominios(
	id int primary key NOT NULL AUTO_INCREMENT,
    id_produto int,
    link varchar(255) NOT NULL,
    nome_site varchar(255) NOT NULL,
    foreign key (id_produto) references produtos(id)
);

select * from produtos;
delete from produtos where id = 7;


insert into dominios (id, id_produto, link, nome_site)  values(null, 8, "http://google.com/", "teste");

select*from dominios