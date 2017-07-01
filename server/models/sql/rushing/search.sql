SELECT * FROM rushing
WHERE player_name ILIKE '%${name#}%'
ORDER BY ${order^};