SELECT 
    category,
    SUM(sales_amount) AS total_sales,
    SUM(COALESCE(discount, 0)) AS total_discount
FROM 
    ProductSales
GROUP BY 
    category;