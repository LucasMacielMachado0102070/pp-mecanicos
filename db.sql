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

-- LINKS DO FILTRO DE AR
insert into dominios (id, id_produto, link, nome_site)  values(null, 17, "https://www.compremann.com.br/p/1007181/filtro-de-ar-mann-filter-c15351-unitario", "Mann Filter");
insert into dominios (id, id_produto, link, nome_site)  values(null, 17, "https://www.compremann.com.br/p/1088630/filtro-de-ar-mann-filter-c131144-unitario", "Mann Filter");
insert into dominios (id, id_produto, link, nome_site)  values(null, 17, "https://www.compremann.com.br/p/1088624/filtro-de-ar-mann-filter-c11763-unitario", "Mann Filter");
insert into dominios (id, id_produto, link, nome_site)  values(null, 17, "https://www.compremann.com.br/p/1088638/filtro-de-ar-mann-filter-c15300-unitario", "Mann Filter");
insert into dominios (id, id_produto, link, nome_site)  values(null, 17, "https://www.compremann.com.br/p/1088636/filtro-de-ar-mann-filter-c151653-unitario", "Mann Filter");

-- LINKS DO FILTRO DE COMBUSTIVEL
insert into dominios (id, id_produto, link, nome_site)  values(null, 18, "https://www.jocar.com.br/produto/filtros/filtro-de-combustivel/772584-filtro-de-combustivel-wega-motors-agile-celta-corsa-meriva-1-4-8v-flex-power-strada-1-4-8v-ate-2020-de-plastico-fci1660/", "Loja: JOCAR");
insert into dominios (id, id_produto, link, nome_site)  values(null, 18, "https://www.jocar.com.br/produto/filtro-de-combustivel/772583-filtro-de-combustivel-wega-motors-hb20-2012-ate-2019-1-0-1-6-12-16v-v-drive-2020-em-diante-de-plastico-fci1630/", "Loja: JOCAR");
insert into dominios (id, id_produto, link, nome_site)  values(null, 18, "https://www.jocar.com.br/produto/filtro-de-combustivel/717365-filtro-de-combustivel-bosch-astra-corsa-monza-palio-0986bf0018/", "Loja: JOCAR");
insert into dominios (id, id_produto, link, nome_site)  values(null, 18, "https://www.jocar.com.br/produto/filtro-de-combustivel/75038-filtro-de-combustivel-bosch-uno-mille-1-0-8v-1990-ate-1995-motor-carburado-alcool-gasolina-6-8-mm-(grande)-universal-0986450646/", "Loja: JOCAR");
insert into dominios (id, id_produto, link, nome_site)  values(null, 18, "https://www.jocar.com.br/produto/filtro-de-combustivel/75054-filtro-de-combustivel-bosch-fiorino-elba-premio-uno-1-0-1-3-1-5-1-6-92-08-tempra-2-0-93-98-tipo-1-6-93-97-0986bf0023/", "Loja: JOCAR");

select * from produtos;

update produtos set valor = 49.98 where id = 8;

update produtos set descricao = "O Mobil Super 5W30 é sintético de alto desempenho e baixo teor de cinzas, projetado para ajudar a prolongar a vida útil do motor e manter a eficiência dos sistemas de redução de emissões dos gases de escape de automóveis e utilitários." where id = 8;
update produtos set descricao = "A finalidade do filtro de combustível é eliminar impurezas no combustível para que ele chegue ao cilindro de combustão o mais puro possível." where id = 17;
update produtos set descricao = "A finalidade do filtro de combustível é eliminar impurezas no combustível para que ele chegue ao cilindro de combustão o mais puro possível." where id = 18;

update produtos set especificacao = "Mobil Super 5W30 Sintético 1 LT API SP GF-6 - Aprovação GM dexos1 (Ford / Chrysler)" where id = 8;
update produtos set especificacao = "Filtro de Ar - Mann - Filter" where id = 17;
update produtos set especificacao = "Filtro de Combustível - Bosch" where id = 18;

alter table produtos add column especificacao varchar(255);
select * from dominios