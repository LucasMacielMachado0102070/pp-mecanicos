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
  valor float(2) NOT NULL,
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
delete from produtos where id = 15;

select * from nomes;
insert into nomes (nome,senha) values("Lucas","Lucas");

insert into dominios (id, id_produto, link, nome_site)  values(null, 8, "https://www.fastcarbrasil.com.br/mobil-super-sintetico-d1-5w-30-1litro-aprovacao-gm?srsltid=AfmBOopkwruFiNHJsZUTtP34sQvIwdJnhBrUGtSCAH6TlAhb2Wo0EuQd", "Fastcar");

select * from produtos;

update produtos set valor = 49.98 where id = 8;

update produtos set descricao = "O Mobil Super 5W30 é sintético de alto desempenho e baixo teor de cinzas, projetado para ajudar a prolongar a vida útil do motor e manter a eficiência dos sistemas de redução de emissões dos gases de escape de automóveis e utilitários." where id = 8;

update produtos set especificacao = "Mobil Super 5W30 Sintético 1 LT API SP GF-6 - Aprovação GM dexos1 (Ford / Chrysler)" where id = 8;

alter table produtos add column especificacao varchar(255);
select*from dominios