const router = require('koa-router')
const product = require('./product')
const test = require('./test')

const _router = router()

_router[product.methods](product.url, product.foo)
_router[test.methods](test.url, test.foo)
// _router.get(product.url, product.foo)

module.exports = _router.routes()