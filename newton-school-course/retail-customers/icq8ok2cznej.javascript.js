select
c.CustomerName,
c.Email,
count(o.OrderID) as TotalOrders,
round(avg(o.OrderValue),2) as AverageOrderValue
from Customers c
join Orders o on o.CustomerID = c.CustomerID
group by 
c.CustomerID,
c.CustomerName,
c.Email
order by TotalOrders desc