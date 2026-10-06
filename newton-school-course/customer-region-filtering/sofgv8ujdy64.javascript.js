-- Task 1: Retrieve Asia-Pacific or Middle East customers
SELECT * 
FROM Customers 
WHERE region IN ('Asia-Pacific', 'Middle East');

-- Task 2: Retrieve customers from Japan, India, or China
SELECT * 
FROM Customers 
WHERE country IN ('Japan', 'India', 'China');

-- Task 3: Retrieve Business or Enterprise accounts
SELECT * 
FROM Customers 
WHERE account_type IN ('Business', 'Enterprise');

-- Task 4: Retrieve customers not from North America or Europe
SELECT * 
FROM Customers 
WHERE region NOT IN ('North America', 'Europe');