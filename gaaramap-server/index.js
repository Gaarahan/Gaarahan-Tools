const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const rt = require('koa-rt')

const router = require('./routes')

const app = new Koa()

app.use(rt)

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8088, () => {
  console.log('listen on http://localhost:8088')
})
