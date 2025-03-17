create table items (
id SERIAL PRIMARY KEY ,
acessoires_burau varchar(50),
price DECIMAL(10, 2)
)
insert into items (acessoires_burau,price)
values (' Petit bureau ',100),
(' Grand bureau ',300),
(' Ventilateur ',80)

ALTER TABLE items
RENAME COLUMN acessoires_burau TO acessoires_bureau;

create table customers (
id SERIAL PRIMARY KEY ,
first_name varchar(50),
last_name varchar (100)
)
insert into customers (first_name,last_name)
values (' Greg','Jones'),
(' Sandra','Jones'),
('Scott','Scott'),
( 'Trevor' , 'Vert'),
('Mélanie' , 'Johnson')
select * from items
select * from customers
select * from items where price > 80
select * from items where price <= 300
select * from customers where last_name = 'Smith'
on a recu une table vide
select * from customers where last_name = 'Jones' 
select * from customers where first_name != 'Scott' 