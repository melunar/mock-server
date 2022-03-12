const Koa = require('koa')
const routes = require('./api/index')

const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = '你还好吗，没有接口的日子。';
  next()
})

app.use(routes)

app.listen(3050)
console.log('listening 3050...')