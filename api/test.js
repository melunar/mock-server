const data = {
  title: '这是datav标题-async',
  arr: [1, 3, 4]
}

module.exports = {
  methods: 'get',
  url: '/api/test',
  foo: async (ctx, next) => {
    ctx.response.type = 'application/json'
    ctx.response.body = {
      data
    }
    next()
  }
}