// ─── 1 ───
SELECT 
    customer_name, 
    annual_spending,
    CASE 
        WHEN annual_spending < 20000 THEN 'Silver'
        WHEN annual_spending BETWEEN 20000 AND 50000 THEN 'Gold'
        ELSE 'Platinum'
    END AS membership_tier
FROM customer_spending;

SELECT 
    CASE 
        WHEN annual_spending < 20000 THEN 'Silver'
        WHEN annual_spending BETWEEN 20000 AND 50000 THEN 'Gold'
        ELSE 'Platinum'
    END AS membership_tier,
    COUNT(*) AS customer_count
FROM customer_spending
GROUP BY membership_tier
ORDER BY customer_count DESC;

// ─── 2 ───
 customer_name | annual_spending | membership_tier 
---------------+-----------------+-----------------
 Aarav         |           12000 | Silver
 Diya          |           45000 | Gold
 Vivaan        |           18000 | Silver
 Ananya        |           75000 | Platinum
 Ishaan        |           30000 | Gold
 Rohan         |           85000 | Platinum
(6 rows)

 membership_tier | customer_count 
-----------------+----------------
 Silver          |              2
 Platinum        |              2
 Gold            |              2
(3 rows)