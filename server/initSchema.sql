DROP DATABASE IF EXISTS nfl;
CREATE DATABASE nfl;

\c nfl;

CREATE TABLE rushing (
    id SERIAL PRIMARY KEY,
    player_name TEXT, -- Player
    player_team VARCHAR(3), -- Team
    player_position VARCHAR(2), -- Pos
    rushing_attempts_per_game REAL, -- Att/G
    rushing_attempts INT, -- Att
    rushing_yards_total INT, -- Yrds
    rushing_yards_average REAL, -- Avg
    rushing_yards_per_game REAL, -- Yds/G
    rushing_touchdowns_total INT, -- TD
    rushing_longest INT, -- Lng
    rushing_longest_touchdown BOOL, -- Lng
    rushing_first_downs INT, -- 1st
    rushing_first_downs_perc REAL, -- 1st%
    rushing_greater_than_20 INT, -- 20+
    rushing_greater_than_40 INT, -- 40+
    rushing_fumbles INT -- FUM
);
