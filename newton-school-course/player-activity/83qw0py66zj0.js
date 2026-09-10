SELECT 
    game_mode,
    COUNT(player_id) AS total_players,
    COUNT(CASE WHEN status = 'Active' THEN 1 END) AS active_players,
    COUNT(CASE WHEN status = 'Inactive' THEN 1 END) AS inactive_players,
    SUM(points) AS total_points,
    ROUND(AVG(points), 2) AS average_points
FROM 
    PLAYER_ACTIVITY
GROUP BY 
    game_mode
ORDER BY 
    total_points DESC;