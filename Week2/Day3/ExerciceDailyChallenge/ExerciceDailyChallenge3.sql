-- partie 1
1)

create table Customer (
id serial primary key ,
first_name varchar (50),
last_name varchar (100) not null
)
create table Customer_profil (
id serial primary key ,
isLoggedIn BOOLEAN DEFAULT FALSE,
customer_id integer unique ,
FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE
)

2)

insert into Customer (first_name,last_name)
values ('John', 'Doe'),
('Jerome','Lalu'),
('Lea', 'Rive')

3)

insert into Customer_profil(isLoggedIn , customer_id)
values (true , (select id from Customer WHERE first_name = 'John' AND last_name = 'Doe')),
(False ,( select id from Customer WHERE first_name = 'Jerome' AND last_name = 'Smith'))

-- select * from Customer
-- select * from Customer_profil


4)

select first_name from Customer_profil cp
join Customer c on c.id = cp.customer_id
where cp.isloggedin = true

select c.first_name ,cp.isloggedin from Customer c
left join Customer_profil cp on c.id = cp.customer_id

select COUNT(*) AS nb_clients_non_connectes
FROM Customer_profil
WHERE isLoggedIn = FALSE;

-- partie 2 
1)

CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
)

2)

INSERT INTO Book (title, author) VALUES
('Alice au pays des merveilles', 'Lewis Carroll'),
('Harry Potter', 'J.K. Rowling'),
('Pour tuer un oiseau moqueur', 'Harper Lee')

3)

CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    age INT CHECK (age <= 15) -- Vérification que l'âge ne dépasse pas 15
)

4)

INSERT INTO Student (name, age) VALUES
('Jean', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

5)

CREATE TABLE Bibliothèque (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);

6)

INSERT INTO Bibliothèque (book_fk_id, student_fk_id, borrowed_date)
VALUES 
((select book_id from Book where title = 'Alice au pays des merveilles'),
 (select student_id from Student where name = 'Jean'),
 '2022-02-15'),

((select book_id from Book where title = 'Pour tuer un oiseau moqueur'),
 (select student_id from Student where name = 'Bob'),
 '2021-03-03'),

((select book_id from Book where title = 'Alice au pays des merveilles'),
 (select student_id from Student where name = 'Lera'),
 '2021-05-23'),

((select book_id from Book where title = 'Harry Potter'),
 (select student_id from Student where name = 'Bob'),
 '2021-08-12');

 select * from Bibliothèque;
 select * from book
 select * from student 
  
 7)
 
 select * from Bibliothèque

 select s.name , b.title from student s 
 join Bibliothèque bl on s.student_id = bl.student_fk_id
 join book b on bl.book_fk_id = b.book_id


 select avg(s.age) from student s 
 join Bibliothèque bl on s.student_id = bl.student_fk_id
 join book b on bl.book_fk_id = b.book_id
 where b.title = 'Alice au pays des merveilles'


delete from Student where name = 'Bob';

 Tous les emprunts de Bob sont  supprimés de la table Bibliothèque, grâce à on delete cascade