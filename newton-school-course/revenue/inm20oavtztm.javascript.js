select
origin,
destination,
sum(revenue) as total_revenue,
sum(seats_sold) as total_seats_sold
from Flights
group by origin , destination;