create database mecanicasdb;

CREATE TABLE `nomes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`),
  UNIQUE KEY `senha` (`senha`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `valor` float NOT NULL,
  `imagem` varchar(225) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE dominios(
	id int NOT NULL AUTO_INCREMENT,
    id_produto int,
    link varchar(255) NOT NULL,
    nome_site varchar(255) NOT NULL,
    foreign key (id_produto) references  produtos(id)
)