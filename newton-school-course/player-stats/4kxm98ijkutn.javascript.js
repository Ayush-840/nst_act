select 
game_category,
count(player_name) as  total_players,
sum(points) as  total_points
from PLAYER_STATS
group by game_category;

select 
game_category,
sum(points) as total_points
from PLAYER_STATS
group by game_category
order by total_points desc;