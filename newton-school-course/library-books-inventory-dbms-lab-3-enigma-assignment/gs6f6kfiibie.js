-- write your code below
create table categories(category_id int primary key auto_increment,name varchar(100) not null);
create table books(book_id int primary key auto_increment,title varchar(150) not null,author varchar(100) not null,category_id int not null,available_copies smallint check(available_copies>=0) default 1, foreign key (category_id) references categories(category_id) );
-- desc books;
-- desc categories;
insert into categories(name) values("Fantasy"),("Sci-fi"),("Horror"),("Biography"),("History");

insert into books(title, author, category_id, available_copies) values("Harry Potter","J.K. Rowling",1,4),("Dune","Frank Herbert",2,5),("Dracula","Bram Stoker",3,2),("Steve Jobs","Walter Isaacson",4,3),("Sapiens: A Brief History of Humankind","Yuval Noah Harari",5,6);
SELECT * FROM categories ORDER BY name;
SELECT * FROM books;