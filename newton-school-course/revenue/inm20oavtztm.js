// ─── 1 ───
SELECT 
    origin,
    destination,
    SUM(revenue) AS total_revenue,
    SUM(seats_sold) AS total_seats_sold
FROM 
    Flights
GROUP BY 
    origin, 
    destination;

// ─── 2 ───
  origin   | destination | total_revenue | total_seats_sold 
-----------+-------------+---------------+------------------
 Paris     | Madrid      |      47500.00 |              515
 Frankfurt | Rome        |      44000.00 |              475
 Doha      | Paris       |      55000.00 |              520
 Dubai     | London      |      66000.00 |              620
 Singapore | Tokyo       |      63500.00 |              580
(5 rows)