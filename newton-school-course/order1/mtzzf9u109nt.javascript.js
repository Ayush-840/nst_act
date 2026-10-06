select 
cust_id
from orders
GROUP BY cust_id
HAVING COUNT(*)>3;

-- SELECT cust_id
-- FROM orders
-- GROUP BY cust_id
-- HAVING COUNT(*) > 3;