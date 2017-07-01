INSERT INTO rushing (
    player_name, player_team, player_position,
    rushing_attempts_per_game, rushing_attempts,
    rushing_yards_total, rushing_yards_average, rushing_yards_per_game,
    rushing_touchdowns_total,
    rushing_longest, rushing_longest_touchdown,
    rushing_first_downs, rushing_first_downs_perc,
    rushing_greater_than_20, rushing_greater_than_40,
    rushing_fumbles
)
    VALUES (
        ${playerName}, -- Player
        ${playerTeam}, -- Team
        ${playerPosition}, -- Pos
        ${rushingAttemptsPerGame}, -- Att/G
        ${rushingAttempts}, -- Att
        ${rushingYardsTotal}, -- Yds
        ${rushingYardsAverage}, -- Avg
        ${rushingYardsPerGame}, -- Yds/G
        ${rushingTouchdownsTotal}, -- TD
        ${rushingLongest}, -- Lng
        ${rushingLongestTouchdown}, -- Lng
        ${rushingFirstDowns}, -- 1st
        ${rushingFirstDownsPerc}, -- 1st%
        ${rushingGreaterThan20}, -- 20+
        ${rushingGreaterThan40}, -- 40+
        ${rushingFumbles} -- FUM
    )
    RETURNING id;