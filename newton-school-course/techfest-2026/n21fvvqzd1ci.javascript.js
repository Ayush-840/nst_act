select participant_name , college_city,registration_time
from registrations
where college_city in('Pune','Mumbai','Nagpur')
order by registration_time asc
limit 5