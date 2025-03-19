-- update étudiants 
-- set date_de_naissance =  '02/11/1998'
-- where prénom ='Léa'
-- or prénom = 'Mark'

-- select * from étudiants

-- update étudiants 
-- set nom_de_famille = 'Guez'
-- where nom_de_famille = 'Grez'

-- delete from étudiants where nom_de_famille = 'Bénichou' and prénom = 'Léa'
-- select count(*) from étudiants
-- select count(*) from étudiants
-- where date_de_naissance > '2000-01-01'
-- ALTER TABLE étudiants
-- ADD COLUMN math_grade integer ;

-- UPDATE étudiants
-- set math_grade = 80 
-- where identifiant = 1

-- UPDATE étudiants
-- set math_grade = 90 
-- where identifiant in (2,4)

-- UPDATE étudiants
-- set math_grade = 40 
-- where identifiant = 6

-- select count(*) from étudiants where math_grade > 83

-- insert into étudiants (nom_de_famille, prénom , date_de_naissance, math_grade)
-- values('Simpson','Omer', DATE'1980-10-03' ,  70)

-- select prénom , nom_de_famille ,count(math_grade) as total_grade 
-- from étudiants
-- group by prénom , nom_de_famille
select sum(math_grade) from étudiants
