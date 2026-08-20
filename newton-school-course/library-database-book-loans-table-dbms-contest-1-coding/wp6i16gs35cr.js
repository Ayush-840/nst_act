create table Book_loans(loan_id int primary key, book_id int , member_id int , staff_id int , loan_date date not null, return_date date , foreign key (book_id) references Books(book_id), foreign key (member_id) references Members(member_id), foreign key (staff_id) references Staff(staff_id));
insert into Book_Loans(loan_id, book_id, member_id, staff_id, loan_date, return_date) values(101,201,301,401,"2024-04-01","2024-04-15"), (102,202,302,402,"2024-04-03",NULL), (103,203,303,401,"2024-04-05","2024-04-20");

SELECT * FROM Book_Loans;