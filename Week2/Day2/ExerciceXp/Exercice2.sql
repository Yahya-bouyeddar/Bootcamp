-- Dans la base de données dvdrental, écrivez une requête pour sélectionner toutes les colonnes de la table « client ».
select * from customer

-- Écrivez une requête pour afficher les noms ( prénom , nom ) en utilisant un alias nommé « full_name ».
select concat (first_name, ' ' ,last_name) as full_name from customer

-- Obtenons toutes les dates de création des comptes. Écrivez une requête pour sélectionner toutes les dates de création de la table « client » (il ne doit y avoir aucun doublon).
select distinct create_date from customer

-- Écrivez une requête pour obtenir tous les détails du client à partir de la table client, elle doit être affichée par ordre décroissant par leur prénom.
select * from customer order by first_name desc

-- Écrivez une requête pour obtenir l'ID du film, le titre, la description, l'année de sortie et le tarif de location par ordre croissant en fonction de leur tarif de location.
select film_id , title , description, release_year,rental_rate  from film order by rental_rate asc

-- Écrivez une requête pour obtenir l'adresse et le numéro de téléphone de tous les clients vivant dans le district du Texas, ces détails peuvent être trouvés dans la table « adresse ».
select address , phone from address where district = 'Texas'

-- Écrivez une requête pour récupérer tous les détails du film où l'ID du film est 15 ou 150.
select * from film where film_id in (15,150)

-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
select film_id , title , description , length , rental_rate from film where title = 'Cider Desire'

-- No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id , title , description , length , rental_rate from film   where title like 'Ci%'

-- Écrivez une requête qui trouvera les 10 films les moins chers.
select * from film order by replacement_cost asc limit 10

-- Vous n'êtes pas satisfait des résultats. Écrivez une requête qui trouvera les 10 films les moins chers suivants.
-- -- Bonus : évitez d'utiliser LIMIT.
select * from film order by replacement_cost offset 10 rows fetch next 10 rows only

select customer.first_name , customer.last_name , payment.amount , payment.payment_date
from  customer
inner join payment
on customer.customer_id = payment.customer_id
order by customer.customer_id asc

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
select * from film 
where film_id not in (select  film_id from inventory)

-- Write a query to find which city is in which country.

SELECT city.city, country.country
FROM city
INNER JOIN country ON city.country_id = country.country_id;

-- bonus
select customer.customer_id , customer.first_name , customer.last_name , payment.amount , payment.payment_date
FROM customer
INNER JOIN  payment
ON customer.customer_id = payment.customer_id

