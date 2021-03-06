const router = require('koa-router')()

const signUp = require('../controller/signup')
const login = require('../controller/login')
const home = require('../controller/home');


// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
/**
 * 主页
 */
.get('/', home.getHome)

   // 注册的异步验证
  router.post('/signup', signUp.signUp)

   // 登录的异步验证
   router.post('/login', login.login)

// 注册页面
  router.get('/signup', async(ctx,next)=>{
    await ctx.render('signup',{title:'注册页面'})
  })
  /**
   * 登录页面 
   */
  .get('/login', async(ctx) => {
    await ctx.render('login', {title: '登录界面', session: ctx.session});
  })
    /**
   * 登出
   */
  .get('/logout', async(ctx) => {
    //删除session信息
    ctx.session = null;
    await ctx.redirect('/');
  })
module.exports = router
