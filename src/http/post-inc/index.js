let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function post (req) {
  await data.set({
    table: 'inc',
    value: 0,
    nine: 9,
    aString: 'Great beach!',
    key: 'the_value'
  })
  return {
    statusCode: 200
  }
}
