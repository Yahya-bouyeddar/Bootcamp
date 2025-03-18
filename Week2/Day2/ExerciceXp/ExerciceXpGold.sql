-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.

-- select rating,count(*) from film group by rating

-- Obtenez une liste de tous les films classés G ou PG-13.
-- Filtrez davantage cette liste : recherchez uniquement les films de moins de 2 heures et dont le prix de location (rental_rate) est inférieur à 3,00 $. Triez la liste par ordre alphabétique.
-- select title from film
-- where  rental_rate < 3 
-- and rental_duration < 2   
-- and rating in ('G' ,'PG-13')
-- order by title asc  
-- select * from film

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- update customer 
-- set first_name = 'yahya' , last_name = 'elouazzani '
-- where first_name = 'Jared' 
-- and last_name = 'Ely'


-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).

-- UPDATE address
-- SET address = 'sbata'
-- FROM customer
-- WHERE address.address_id = customer.address_id
--   AND customer.first_name = 'yahya';

-- select address.address
-- from address 
-- inner join customer 
-- on address.address_id=customer.address_id
-- where customer.first_name = 'yahya'