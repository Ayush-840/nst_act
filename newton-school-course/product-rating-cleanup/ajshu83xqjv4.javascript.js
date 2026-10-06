select 
 product_name,
 abs(raw_rating) as clean_rating,
 round(abs(raw_rating),1) as rounded_rating,
 round(abs(round(abs(raw_rating),1)-system_b_avg),2) as deviation
from products 
where round(abs(round(abs(raw_rating),1)-system_b_avg),2) > 0.5
order by deviation desc