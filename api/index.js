const router = require('koa-router')
const product = require('./product')

const _router = router()

_router[product.methods](product.url, product.foo)
// _router.get(product.url, product.foo)

module.exports = _router.routes()