const database = require('../data/database')

class DatabaseService {
  constructor (database) {
    this._database = database
  }

  queryUserByUsername (name) {
    return this.database.users.find(itm => {
      return itm.username === name
    }) || null
  }

  queryUserByID (id) {
    return this.database.users.find(itm => {
      return itm.username === name
    }) || null
  }

  get database () {
    return this._database
  }
}

module.exports = new DatabaseService(database)
