const DatabaseService = require('./DatabaseService')
const User = require('../models/User')
const md5 = require('md5')
const CustomError = require('../utils/CustomError')

class UserService {
  login (loginInfo) {
    const { username, password } = loginInfo
    if (!username || !password) {
      return new CustomError('用户名或密码不能为空')
    }

    const result = DatabaseService.queryUserByUsername(username)
    if (!result) {
      return new CustomError('用户名不存在')
    }
    if (result.password !== md5(password)) {
      return new CustomError('密码错误，请重试')
    }

    return new User(result)
  }

  getInfoByID (id) {
    const result = DatabaseService.queryUserByID(id)
    if (result) {
      return new CustomError('找不到对应ID的用户,请检查用户ID')
    }

    return new User(result)
  }

  register () {
    return true
  }
}

module.exports = new UserService()
