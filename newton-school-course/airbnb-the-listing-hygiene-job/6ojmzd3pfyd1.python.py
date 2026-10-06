// ─── 4 ───
-- 1. take poorly rated listings off the site
SELECT * from listings;
SELECT * from bookings;

UPDATE listings SET is_active = false
WHERE rating < 3.0;

-- 2. peak season price rise for Goa
UPDATE listings SET price_per_night = ROUND(price_per_night * 1.05, 2)
where UPPER(city) ='GOA';

-- 3. expire stale pending bookings
UPDATE bookings 
SET status = 'expired'
WHERE 
status='pending' and booked_on < DATE '2026-02-01';


-- 4. refresh the confirmed stay counter
UPDATE listings SET confirmed_stays =
  (SELECT COUNT(*) FROM bookings b WHERE b.listing_id = listings.id and status='confirmed');

-- 5. purge old expired bookings
DELETE FROM bookings
WHERE status = 'expired' AND booked_on < DATE '2025-12-01';

// ─── 39 ───
 id | host_name |  city  | price_per_night | rating | is_active | confirmed_stays 
----+-----------+--------+-----------------+--------+-----------+-----------------
  1 | Aarti     | Goa    |         4000.00 |   4.60 | t         |               0
  2 | Bosco     | goa    |         2500.00 |   2.80 | t         |               0
  3 | Cyrus     | Manali |         3000.00 |        | t         |               0
  4 | Divya     | Goa    |         5000.00 |   3.00 | t         |               0
  5 | Elias     | Jaipur |         1800.00 |   4.90 | f         |               0
(5 rows)

 id  | listing_id |  status   | nights | total_amount | booked_on  
-----+------------+-----------+--------+--------------+------------
 101 |          1 | confirmed |      3 |     12000.00 | 2026-02-10
 102 |          1 | cancelled |      2 |      8000.00 | 2026-02-12
 103 |          2 | pending   |      4 |     10000.00 | 2026-01-05
 104 |          3 | confirmed |      1 |      3000.00 | 2026-02-25
 105 |          4 | pending   |      2 |     10000.00 | 2026-02-01
 106 |          4 | confirmed |      5 |     25000.00 | 2026-02-20
 107 |          5 | expired   |      1 |      1800.00 | 2025-11-15
 108 |          2 | confirmed |      2 |      5000.00 | 2026-03-02
 109 |          1 | confirmed |      2 |      7000.00 | 2026-01-20
(9 rows)

UPDATE 1
UPDATE 3
UPDATE 1
UPDATE 5
DELETE 1


// ─── 40 ───
-- 1. take poorly rated listings off the site

select * from listings;
select * from bookings;

UPDATE listings SET is_active = false
WHERE COALESCE(rating) < 3.0;

-- 2. peak season price rise for Goa
UPDATE listings SET price_per_night = ROUND(price_per_night * 1.05, 2);

-- 3. expire stale pending bookings
UPDATE bookings SET status = 'expired'
WHERE booked_on < DATE '2026-02-01';

-- 4. refresh the confirmed stay counter
UPDATE listings SET confirmed_stays =
  (SELECT COUNT(*) FROM bookings b WHERE b.listing_id = listings.id);

-- 5. purge old expired bookings
DELETE FROM bookings
WHERE status = 'expired' AND booked_on > DATE '2025-12-01';