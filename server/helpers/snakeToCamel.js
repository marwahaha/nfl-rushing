function snakeToCamel (object) {
  const newObject = {}

  Object.keys(object).forEach(key => {
    // Match underscore followed by letter, replace with just capitalized letter
    const camelKey = key.replace(/(_\w)/g, match => match[1].toUpperCase())
    newObject[camelKey] = object[key]
  })

  return newObject
}

module.exports = snakeToCamel
