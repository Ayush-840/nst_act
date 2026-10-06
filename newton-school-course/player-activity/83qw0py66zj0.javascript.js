// ─── 4 ───
select
game_mode,
count(player_name) as total_players,
count(
    case
        WHEN status = 'Active' then 1
    end
) as active_players,
-- COUNT(CASE WHEN status = 'Active' THEN 1 END) AS active_players,
count(
    case
        when status = 'Inactive' then 1
    end
) as inactive_players,
sum(points) as total_points,
round(avg(points),2) as average_points
from PLAYER_ACTIVITY
group by game_mode
order by total_points desc

// ─── 13 ───
 game_mode | total_players | active_players | inactive_players | total_points | average_points 
-----------+---------------+----------------+------------------+--------------+----------------
 Battle    |             3 |              3 |                0 |         2550 |         850.00
 Racing    |             3 |              2 |                1 |         1440 |         480.00
 Puzzle    |             2 |              1 |                1 |         1000 |         500.00
(3 rows)



// ─── 14 ───
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