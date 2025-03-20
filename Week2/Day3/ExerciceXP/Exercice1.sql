1)
SELECT * FROM language ;

2)

SELECT film.title , film.description , language.name AS language_name
FROM film
JOIN language ON film.language_id = language.language_id;

3)

SELECT film.title, film.description, language.name AS language_name
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

4)

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

INSERT INTO new_film (name) VALUES ('SAW x'), ('12 Angry man'), ('Marvel');


5)

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT,
    language_id INT,
    title VARCHAR(240) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_film FOREIGN KEY (film_id) 
        REFERENCES new_film(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    CONSTRAINT fk_language FOREIGN KEY (language_id) 
        REFERENCES language(language_id) 
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);
select * from new_film
6)
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
    (4, 6, 'black_list!', 9, 'One of the best movies.'),
    (3, 2, 'the_punisher', 8, 'Extra movie.');


7)
DELETE FROM new_film WHERE id = 3;
-- Toutes les critiques du film avec id = 3 seront automatiquement supprimées de customer_review a l'aide de methode cascade