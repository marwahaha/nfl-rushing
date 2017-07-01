function camelToTitles (result) {
  return {
    Name: result.playerName,
    Team: result.playerTeam,
    Pos: result.playerPosition,
    Att: result.rushingAttempts,
    'Att/G': result.rushingAttemptsPerGame,
    Yrds: result.rushingYardsTotal,
    Avg: result.rushingYardsAverage,
    'Yds/G': result.rushingYardsPerGame,
    TD: result.rushingTouchdownsTotal,
    Lng: result.rushingLongest,
    '1st': result.rushingFirstDowns,
    '1st%': result.rushingFirstDownsPerc,
    '20+': result.rushingGreaterThan20,
    '40+': result.rushingGreaterThan40,
    FUM: result.rushingFumbles
  }
}

module.exports = camelToTitles
