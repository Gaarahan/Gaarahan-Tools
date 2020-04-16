const UserService = require('../serivice/UserService')
const CustomError = require('../utils/CustomError')

class User {
  login (ctx, next) {
    const loginInfo = ctx.request.body
    const User = UserService.login(loginInfo)
    ctx.session.userId = User.id
    ctx.body = Object.assign({}, User.getInfo(), {
      status: 'success'
    })
    next()
  }

  getInfo (ctx, next) {
    const userId = ctx.session.userId
    if (!userId || userId < 0) {
      throw new CustomError('ID不能为空或负值')
    }
    const User = UserService.getInfoByID(userId)
    ctx.body = Object.assign({}, User.getInfo(), {
      status: 'success'
    })
    next()
  }

  logout (ctx, next) {
    ctx.session = null
    ctx.body = {
      status: 'success',
      message: 'logout success'
    }
  }

  signin (ctx, next) {
    next()
  }
}
module.exports = new User()
