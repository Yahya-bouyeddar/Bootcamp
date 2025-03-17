CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('cristiano','ronaldo','08/10/1986', 3);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('lionel','messi','08/10/1988', 7);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('eden','hazard','08/10/1998', 1),
('kilian','mbappe','08/10/2002', 0),
('neymar','junior','08/10/1998', 2)
select * from actors
UPDATE actors SET age='1970-01-01' WHERE first_name='Matt' AND last_name='Damon';
UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;
DELETE FROM actors WHERE actor_id=4
RETURNING *
select * from actors
select count(*) from actors
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('','','', '')
erreur syntaxe