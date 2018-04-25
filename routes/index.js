const router = require('koa-router')()

const signUp = require('../controller/signup')


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

   // 注册的异步验证
  router.post('/signup', signUp.signUp)

// 注册页面
  router.get('/signup', async(ctx,next)=>{
    await ctx.render('signup',{title:'注册页面'})
  })

module.exports = router
