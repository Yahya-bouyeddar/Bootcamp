create table étudiants (
identifiant serial primary key ,
nom_de_famille varchar(100),
prénom varchar (50),
date_de_naissance DATE not null 
)

INSERT INTO étudiants (nom_de_famille, prénom, date_de_naissance)
VALUES('Bénichou','Marc','02/11/1998'),
('Cohen','Yoan','03/12/2010'),
('Bénichou','Léa','27/07/1987'),
('Dux','Amélie','07/04/1996'),
('Grez','David','14/06/2003'),
('Simpson','Omer','03/10/1980')
INSERT INTO étudiants (nom_de_famille, prénom, date_de_naissance)
VALUES('Elouazzani bouyeddar','Yahya','17/07/1995')
select * from étudiants
select nom_de_famille , prénom from étudiants
select nom_de_famille , prénom  from étudiants where prénom = 'Yahya' and nom_de_famille = 'Elouazzani bouyeddar'

select nom_de_famille , prénom  from étudiants where prénom = 'Marc' and nom_de_famille = 'Bénichou'
select nom_de_famille , prénom  from étudiants where prénom = 'Marc' or nom_de_famille = 'Bénichou'
select nom_de_famille , prénom  from étudiants where prénom like '%a%'
select nom_de_famille , prénom  from étudiants where prénom like 'A%'
select nom_de_famille , prénom  from étudiants where prénom like '%a'
select nom_de_famille , prénom  from étudiants where prénom like '%a_'
select nom_de_famille , prénom  from étudiants where identifiant IN (1, 3)
select * from étudiants where date_de_naissance > '01/01/2000'

 