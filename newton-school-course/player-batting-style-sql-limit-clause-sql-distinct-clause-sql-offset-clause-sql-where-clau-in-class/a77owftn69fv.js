-- select player_name, country from CricketPlayer;
-- desc CricketPlayer;
select player_name, batting_style from CricketPlayer
where lower(country) like 'i%'
order by batting_style desc, player_name asc ;