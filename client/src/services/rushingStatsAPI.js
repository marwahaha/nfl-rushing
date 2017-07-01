import axios from 'axios'

export async function fetchRushingStats (
  rushingYardsTotal,
  rushingLongest,
  rushingTouchdownsTotal,
  playerName,
  csv = false
) {
  return axios.get('/api/v1/rushing', {
    headers: {
      'Accept': csv ? 'text/csv' : 'application/json'
    },
    params: {
      rushingYardsTotal,
      rushingLongest,
      rushingTouchdownsTotal,
      name: playerName !== '' ? playerName : undefined
    }
  })
}
