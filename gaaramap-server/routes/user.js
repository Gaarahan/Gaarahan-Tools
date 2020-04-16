const UserService = require('../serivice/UserService')
const CustomError = require('../utils/CustomError')

class User {
  login (ctx, next) {
    const loginInfo = ctx.request.body
    const user = UserService.login(loginInfo)
    ctx.session.userId = user.id
    ctx.body = Object.assign({}, user.getInfo(), {
      status: 'success'
    })
    next()
  }

  getInfo (ctx, next) {
    const userId = ctx.session.userId
    if (!userId || userId < 0) {
      throw new CustomError('ID不能为空或负值')
    }
    const user = UserService.getInfoByID(userId)
    ctx.body = Object.assign({}, user.getInfo(), {
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
    next()
  }

  signIn (ctx, next) {
    const signInInfo = ctx.request.body
    const res = UserService.signIn(signInInfo)
    if (res) {
      ctx.body = {
        status: 'success',
        message: 'sign in success'
      }
    } else {
      ctx.body = {
        status: 'fail',
        message: 'sign in fail'
      }
    }
    next()
  }
}
module.exports = new User()
