-- Tous les articles, classés par prix (du plus bas au plus élevé).
select * from items order by  price asc 

-- Articles avec un prix supérieur à 80 (80 inclus), classés par prix (du plus élevé au plus bas).
select acessoires_bureau from items where price >= 80 ORDER BY price desc

-- Les 3 premiers clients par ordre alphabétique du prénom (AZ) – excluez la colonne de clé primaire des résultats.
select  first_name, last_name
from customers
order by first_name asc 
limit 3

-- Tous les noms de famille (pas d'autres colonnes !), dans l'ordre alphabétique inverse (ZA)
select last_name from customers order by last_name desc
