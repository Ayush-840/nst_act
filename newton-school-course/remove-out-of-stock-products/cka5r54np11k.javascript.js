delete from products
where stock=0;

select product_id, product_name, stock 
from products