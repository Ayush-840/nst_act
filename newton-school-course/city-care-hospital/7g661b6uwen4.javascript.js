select 
concat(first_name,' ',last_name) as full_name,
blood_group,registration_date
from patients
where 
extract(year from registration_date)=2025 and
blood_group='A-'
order by registration_date desc