async function resolveException (ctx, next) {
  try {
    await next()
  } catch (e) {
    if (e.isCustomError) {
      console.log('got a custom error ')
      ctx.body = {
        status: 'fail',
        message: e.message
      }
    } else {
      console.log('runtime error')
    }
  }
}

module.exports = {
  resolveException
}
