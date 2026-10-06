// ─── 1 ───
-- ============================================
-- DATABASE INSPECTION
-- Uncomment the query you need.
-- ============================================


-- ============================================
-- PRIMARY TABLES
-- ============================================



-- SELECT * FROM devices;

INSERT INTO licenses (license_key)
VALUES ('LIC-2001');
SELECT * FROM licenses;

INSERT INTO devices (device_name)
VALUES ('MacBook-Pro-02'), ('Ubuntu-Laptop-01');
SELECT * FROM devices;

update license_activations 
set is_active = FALSE
where is_active = TRUE;



-- ============================================
-- ACTIVATION TABLE
-- ============================================
INSERT INTO license_activations(license_id,device_id,is_active) VALUES
(1,4,'t'),
(4,5,'t'),
(2,6,'t');
SELECT * FROM license_activations;

// ─── 5 ───
INSERT 0 1
 license_id | license_key 
------------+-------------
          1 | LIC-1001
          2 | LIC-1002
          3 | LIC-1003
          4 | LIC-2001
(4 rows)

INSERT 0 2
 device_id |      device_name      
-----------+-----------------------
         1 | MacBook-Pro-01
         2 | Windows-PC-01
         3 | Ubuntu-Workstation-01
         4 | MacBook-Air-01
         5 | MacBook-Pro-02
         6 | Ubuntu-Laptop-01
(6 rows)

UPDATE 2
INSERT 0 3
 license_id | device_id | is_active 
------------+-----------+-----------
          1 |         1 | f
          2 |         2 | f
          3 |         3 | f
          1 |         4 | t
          4 |         5 | t
          2 |         6 | t
(6 rows)