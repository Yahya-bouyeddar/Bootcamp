-- create table étudiants (
-- identifiant serial primary key ,
-- nom_de_famille varchar(100),
-- prénom varchar (50),
-- date_de_naissance DATE not null 
-- )

-- INSERT INTO étudiants (nom_de_famille, prénom, date_de_naissance)
-- VALUES('Bénichou','Marc','02/11/1998'),
-- ('Cohen','Yoan','03/12/2010'),
-- ('Bénichou','Léa','27/07/1987'),
-- ('Dux','Amélie','07/04/1996'),
-- ('Grez','David','14/06/2003'),
-- ('Simpson','Omer','03/10/1980')
-- INSERT INTO étudiants (nom_de_famille, prénom, date_de_naissance)
-- VALUES('Elouazzani bouyeddar','Yahya','17/07/1995')
-- select * from étudiants where prénom = 'Yahya' and nom_de_famille = 'Elouazzani bouyeddar'
-- select * from étudiants
-- select * from étudiants where prénom = 'Marc' and nom_de_famille = 'Bénichou'
-- select * from étudiants where prénom = 'Marc' or nom_de_famille = 'Bénichou'
-- select * from étudiants where prénom like '%a%'
-- select * from étudiants where prénom like 'A%'
-- select * from étudiants where prénom like '%a'
-- select * from étudiants where prénom like '%a_'
 -- select * from étudiants where identifiant in (1,2,3,4)  order by  nom_de_famille asc 
 -- select * from étudiants order by date_de_naissance desc limit 1 
 -- select * from étudiants limit 4 offset 2
