# Order Payment

## Course Context
**Course:** Newton School Course  
**Problem Slug:** `a2dzq7pcytvn`  
**Submission Time:** 2026-10-30T03:02:55.333Z

## Problem Statement

Scenario:

A retail E-commerce System maintains customer information, their orders, purchased products, and payment details. The database is structured into four main tables:

 
 Customers &ndash; stores details of customers such as their unique ID, name, city, and email. Some customers may not have an email address.

 
 
 Example: Ramesh Kumar from Delhi with email ramesh@gmail.com.

 

 
 

 
 Orders &ndash; records purchase orders placed by customers. Each order is linked to a specific customer and has an order date.

 
 
 Example: Order 101 was placed by customer 1 (Ramesh Kumar) on 2025-01-10.

 

 
 

 
 Products &ndash; contains details of all available products, including their category and price.

 
 
 Example: Product 202 is a Mobile Phone under Electronics priced at 15,000.

 

 
 

 
 Order_Details &ndash; maintains the list of products included in each order with their quantity.

 
 
 Example: Order 101 includes 2 Headphones and 1 Rice pack.

 

 
 

 
 Payments &ndash; records payment information for each order, including payment type, amount paid, and date of payment.

 
 
 Example: Payment 301 for order 101 was made via Credit Card with amount 4,500 on 2025-01-11.

 

 
 

Customers Schema:

 
 
 
 
 
 
 
 Column Name
 Data Type
 Constraints
 
 
 customer_id
 INT
 PRIMARY KEY, NOT NULL
 
 
 customer_name
 VARCHAR(50)
 NOT NULL
 
 
 city
 VARCHAR(30)
 NOT NULL
 
 
 email
 VARCHAR(50)
 UNIQUE
 
 

Orders Schema:

 
 
 
 
 
 
 
 Column Name
 Data Type
 Constraints
 
 
 order_id
 INT
 PRIMARY KEY, NOT NULL
 
 
 customer_id
 INT
 NOT NULL, FOREIGN KEY &rarr; Customers(customer_id)
 
 
 order_date
 DATE
 NOT NULL
 
 

Products Schema:

 
 
 
 
 
 
 
 Column Name
 Data Type
 Constraints
 
 
 product_id
 INT
 PRIMARY KEY, NOT NULL
 
 
 product_name
 VARCHAR(50)
 NOT NULL
 
 
 category
 VARCHAR(30)
 NOT NULL
 
 
 price
 DECIMAL(10,2)
 NOT NULL, CHECK(price &gt;= 0)
 
 

Order_Details Schema:

 
 
 
 
 
 
 
 Column Name
 Data Type
 Constraints
 
 
 item_id
 INT
 PRIMARY KEY, NOT NULL
 
 
 order_id
 INT
 NOT NULL, FOREIGN KEY &rarr; Orders(order_id)
 
 
 product_id
 INT
 NOT NULL, FOREIGN KEY &rarr; Products(product_id)
 
 
 quantity
 INT
 NOT NULL, CHECK(quantity &gt; 0)
 
 

Payments Schema:

 
 
 
 
 
 
 
 Column Name
 Data Type
 Constraints
 
 
 payment_id
 INT
 PRIMARY KEY, NOT NULL
 
 
 order_id
 INT
 NOT NULL, FOREIGN KEY &rarr; Orders(order_id)
 
 
 payment_type
 VARCHAR(20)
 NOT NULL
 
 
 amount
 DECIMAL(10,2)
 NOT NULL, CHECK(amount &gt;= 0)
 
 
 payment_date
 DATE
 NOT NULL
 
 

---------------------------------------------------------------------------------------------------------------------------------------------------

QUESTION :

Write an SQL query to display each product name and the total quantity sold for that product.

Sort the results by total quantity sold in descending order.

Table: Customers

 
 
 
 
 
 
 
 
 customer_id
 customer_name
 city
 email
 
 
 1
 Ramesh Kumar
 Delhi
 ramesh@gmail.com
 
 
 2
 Neha Sharma
 Mumbai
 neha@gmail.com
 
 
 3
 Arjun Mehta
 Bangalore
 arjun@gmail.com
 
 
 4
 Priya Singh
 Jaipur
 priya.singh@gmail.com
 
 
 5
 Vikram Patel
 Ahmedabad
 vikram.patel@gmail.com
 
 
 6
 Sanya Roy
 Kolkata
 sanya.roy@email.com
 
 
 7
 Rohit Verma
 Chennai
 rohit.verma@gmail.com
 
 
 8
 Anita Desai
 Pune
 anita.desai@gmail.com
 
 
 9
 Siddharth Gupta
 Hyderabad
 NULL
 
 
 10
 Meera Joshi
 Lucknow
 meera.joshi@email.com
 
 

Table: Orders

 
 
 
 
 
 
 
 order_id
 customer_id
 order_date
 
 
 101
 1
 2025-01-10
 
 
 102
 2
 2025-02-05
 
 
 103
 1
 2025-02-20
 
 
 104
 3
 2025-03-12
 
 
 105
 4
 2025-03-20
 
 
 106
 5
 2025-04-01
 
 
 107
 6
 2025-04-10
 
 
 108
 7
 2025-04-15
 
 
 109
 8
 2025-05-05
 
 
 110
 9
 2025-05-12
 
 

Table: Products

 
 
 
 
 
 
 
 
 product_id
 product_name
 category
 price
 
 
 201
 Headphones
 Electronics
 2000
 
 
 202
 Mobile Phone
 Electronics
 15000
 
 
 203
 Rice 5kg Pack
 Grocery
 500
 
 
 204
 T-Shirt
 Fashion
 800
 
 
 205
 Washing Machine
 Home Appliances
 18000
 
 
 206
 Coffee Maker
 Home Appliances
 3500
 
 
 207
 Notebook Pack
 Stationery
 200
 
 
 208
 Sneakers
 Fashion
 3000
 
 
 209
 Smart Watch
 Electronics
 7000
 
 
 210
 Olive Oil
 Grocery
 1200
 
 
 211
 Backpack
 Fashion
 2500
 
 
 212
 Desk Lamp
 Home Appliances
 1500
 
 

Table: Order_Details

 
 
 
 
 
 
 
 
 item_id
 order_id
 product_id
 quantity
 
 
 1
 101
 201
 2
 
 
 2
 101
 203
 1
 
 
 3
 102
 202
 1
 
 
 4
 103
 204
 3
 
 
 5
 104
 203
 2
 
 
 6
 105
 205
 1
 
 
 7
 106
 206
 1
 
 
 8
 107
 207
 5
 
 
 9
 108
 208
 2
 
 
 10
 109
 210
 1
 
 
 11
 110
 209
 1
 
 
 12
 103
 211
 1
 
 
 13
 104
 212
 2
 
 
 14
 105
 204
 2
 
 
 15
 106
 203
 3
 
 

Table: Payments

 
 
 
 
 
 
 
 
 
 payment_id
 order_id
 payment_type
 amount
 payment_date
 
 
 301
 101
 Credit Card
 4500
 2025-01-11
 
 
 302
 102
 UPI
 15000
 2025-02-06
 
 
 303
 103
 Debit Card
 4900
 2025-02-21
 
 
 304
 104
 Net Banking
 3500
 2025-03-13
 
 
 305
 105
 Credit Card
 19600
 2025-03-21
 
 
 306
 106
 UPI
 5000
 2025-04-02
 
 
 307
 107
 Debit Card
 1000
 2025-04-11
 
 
 308
 108
 Credit Card
 6000
 2025-04-16
 
 
 309
 109
 UPI
 1200
 2025-05-06
 
 
 310
 110
 Net Banking
 7000
 2025-05-13
 
 

Sample Output:

 
 
 
 
 
 
 product_name
 total_quantity_sold
 
 
 Rice 5kg Pack
 6
 
 
 T-Shirt
 5
 
 
 Notebook Pack
 5
 
 
 Headphones
 2
 
 
 Sneakers
 2
 
 
 Desk Lamp
 2
 
 
 Mobile Phone
 1
 
 
 Washing Machine
 1
 
 
 Coffee Maker
 1
 
 
 Olive Oil
 1
 
 
 Smart Watch
 1
 
 
 Backpack
 1

## Solution

```js
-- Write your code here
select
p.product_name,
sum(od.quantity) as total_quantity_sold
from Products p
join 
Order_Details od 
on p.product_id=od.product_id
group by
p.product_id,
p.product_name
order by 
total_quantity_sold desc
```

---
*Auto-generated by [UniSync Chrome Extension](https://github.com).*
