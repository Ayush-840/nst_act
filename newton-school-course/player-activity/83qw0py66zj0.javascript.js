select 
game_mode,
count(player_name) as total_players,
count(case
when status='Active' then 1 end) as active_players,
count(case when status='Inactive' then 1 end) as inactive_players,
sum(points) as total_points,
round(avg(points),2) as average_points
from PLAYER_ACTIVITY
group by game_mode
order by total_points desc