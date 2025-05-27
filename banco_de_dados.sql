create database loja;

use loja;

create table produtos (
id int auto_increment primary key,
nome varchar(100),
preco decimal(10, 2),
quantidade int);

create table funcionarios (
id int auto_increment primary key,
nome varchar(100),
idade int,
cargo varchar(100)
);

select * from produtos;
select * from funcionarios;

insert into produtos (nome, preco, quantidade)
values ("Teclado", 129.90, 10);

delete from produtos where id = 3;

update produtos set
nome = "Mouse Logitech", preco = 159.90, quantidade = 30
where id = 2;