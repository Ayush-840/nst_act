UPDATE Products 
set price=18.99,quantity_in_stock=50 where product_name='Wireless Mouse';
delete from Products where product_name='Desk Lamp';
insert into Products(product_name,store_location,price,quantity_in_stock)
values('Ergonomic Chair','Chicago',129.99,20);
select*from Products