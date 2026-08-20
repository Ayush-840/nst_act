begin;
update products set stock=stock-1 where product_name='Laptop';
commit;
select*from products