const products = [{
  name: 'iPhone 13',
  price: 6999
}, {
  name: 'Kindle',
  price: 999
}]

module.exports = {
  methods: 'get',
  url: '/api/products',
  foo: async (ctx, next) => {
    ctx.response.type = 'application/json'
    ctx.response.body = {
      products: products
    }
    next()
  }
}