const path = require('path')
const { QueryFile } = require('pg-promise')

function loadSql (fileName) {
  const fullPath = path.join(__dirname, fileName)

  const options = {
    minify: true
  }

  const query = new QueryFile(fullPath, options)

  if (query.error) {
    console.error(query.error)
  }

  return query
}

module.exports = {
  rushing: {
    create: loadSql('rushing/create.sql'),
    getAll: loadSql('rushing/getAll.sql'),
    search: loadSql('rushing/search.sql'),
    stringSearch: loadSql('rushing/stringSearch.sql')
  }
}
