module.exports = {
  login (ctx, next) {
    console.log('got')
    console.log(ctx.request.body)
    next()
  },

  logout (ctx, next) {
    next()
  },

  signin (ctx, next) {
    next()
  }
}
