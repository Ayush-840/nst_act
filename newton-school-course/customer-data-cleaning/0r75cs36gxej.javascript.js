select
customer_id, 
upper(full_name) as name_upper,
lower(city) as city_clean,
lower(trim(email)) as email_clean,
length(trim(email)) as email_length
from customers
order by email_length