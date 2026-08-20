select category, sum(quantity_sold) as total_quantity from SalesData
group by category;