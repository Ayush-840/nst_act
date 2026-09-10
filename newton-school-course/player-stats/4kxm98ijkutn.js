// ─── 1 ───
SELECT 
    game_category, 
    COUNT(player_id) AS total_players, 
    SUM(points) AS total_points
FROM PLAYER_STATS
GROUP BY game_category;

SELECT 
    game_category, 
    SUM(points) AS total_points
FROM PLAYER_STATS
GROUP BY game_category
ORDER BY total_points DESC;

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