-- 1)

update  film  set language_id = 3 where film_id = 8
select * from film
update  film  set language_id = 5 where film_id = 23
update  film  set language_id = 4 where film_id = 49

-- 2)
address_id , store_id

select * from customer

-- 3)

drop table customer_review

-- 4)
select count(rental_id) from rental where return_date is null  

-- 5)
select film.title 
from film
join inventory on  film.film_id = inventory.film_id
join rental on rental.inventory_id = inventory.inventory_id
where rental.return_date is null order by film.replacement_cost desc limit 30

-- 6)

select * from film 
select *  from customer 
select * from rental 
select rental_rate from film
select * from inventory
select * from film_actor
select * from actor
select * from store
select * from staff
select * from payment
select * from film_category
select * from store
select * from language



-- 6) 
-- 1)

select film.title from
film 
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where actor.first_name = 'Penelope' and actor.last_name = 'Monroe' 
and film.description ilike '%sumo%'

-- 6-2)

select title from film 
where length < 60 and rating = 'R' and  description ilike '%documentary%'

-- 6-3)



select f.title
from rental r
join customer c on r.customer_id = c.customer_id
join payment p on r.rental_id = p.rental_id
join inventory i on r.inventory_id = i.inventory_id
join film f on f.film_id = i.film_id
where c.first_name = 'Matthew' 
and c.last_name = 'Mahan'
and p.amount > 4 
and r.return_date > '2005-07-28' 
and r.return_date < '2005-08-01'


-- 6-4)

select f.title from customer c
join rental r on r.customer_id = c.customer_id
join inventory i on i.inventory_id = r.inventory_id
join film f on i.film_id = f.film_id
where c.first_name = 'Matthew' and c.last_name = 'Mahan'
and (f.title ilike '%boat%' or f.description ilike '%boat%')
and f.replacement_cost = (select max (replacement_cost) from film)


