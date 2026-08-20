// ─── 1 ───
select restaurant_name,cuisine from restaurants where cuisine IN('North Indian','Chinese','Italian');

// ─── 2 ───
 restaurant_name |   cuisine    
-----------------+--------------
 Spice Garden    | North Indian
 Dragon Bowl     | Chinese
 Pizza Corner    | Italian
 Pasta Palace    | Italian
 Wok Express     | Chinese
 Royal Tandoor   | North Indian
(6 rows)