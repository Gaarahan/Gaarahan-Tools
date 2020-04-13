const Router = require('@koa/router')
const router = new Router()

const account = require('./routes/account')

router.get('/account', (ctx, next) => {
  console.log('got account')
  next()
})

router.get('/account/login', account.login)
router.post('/account/logout', account.logout)
router.post('/account/signin', account.signin)

module.exports = router
