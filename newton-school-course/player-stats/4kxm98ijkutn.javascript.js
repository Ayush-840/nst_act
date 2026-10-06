// ─── 2 ───
 game_category | total_players | total_points 
---------------+---------------+--------------
 Strategy      |             2 |         1800
 Puzzle        |             1 |          650
 Action        |             3 |         2540
(3 rows)

 game_category | total_points 
---------------+--------------
 Action        |         2540
 Strategy      |         1800
 Puzzle        |          650
(3 rows)



// ─── 4 ───
select 
game_category,
count(player_name) as total_players,
sum(points) as total_points
from PLAYER_STATS
group by game_category;

select 
game_category,
sum(points) as total_points
from PLAYER_STATS
group by game_category
order by total_points desc

// ─── 8 ───
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