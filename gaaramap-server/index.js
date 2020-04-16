const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const router = require('./routes')
const session = require('koa-session')

const app = new Koa()
app.keys = ['gaarahan']

app
  .use(session(app))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8088, () => {
  console.log('listen on http://localhost:8088')
})
