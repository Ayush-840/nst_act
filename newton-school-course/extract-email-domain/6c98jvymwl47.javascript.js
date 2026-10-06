select username,
lower(substring(email from position('@' in email)+1)) as email_domain
from users
order by user_id;