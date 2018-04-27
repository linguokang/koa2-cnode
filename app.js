const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session2')
const Store  = require ("./models/store");
// import Store from "./models/store";
// import session from "koa-session2";
// const session = require('koa-session');
const index = require('./routes/index')
const users = require('./routes/users')
const topic = require('./routes/topic')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(session({
  store: new Store(),
  //cookie的保存期为一天
  maxAge: 1000 * 60 * 60 * 24,
}));

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(topic.routes(), topic.allowedMethods())


// app.use(ctx => { 
//   let user = ctx.session.user;

//   ctx.session.view = "index";
//   // ctx.session.user = "hhhhh";
//   console.log(ctx.session.user)
//   console.log(ctx.session.view)
//   console.log(user)
// });

// app.keys = ['some secret hurr'];
// const CONFIG = {
//   key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
//   /** (number || 'session') maxAge in ms (default is 1 days) */
//   /** 'session' will result in a cookie that expires when session/browser is closed */
//   /** Warning: If a session cookie is stolen, this cookie will never expire */
//   maxAge: 86400000,
//   overwrite: true, /** (boolean) can overwrite or not (default true) */
//   httpOnly: true, /** (boolean) httpOnly or not (default true) */
//   signed: true, /** (boolean) signed or not (default true) */
//   rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
//   renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
// };

// app.use(session(CONFIG, app));
// // or if you prefer all default config, just use => app.use(session(app));
// app.use(ctx => {
//   console.log('++++++++++++++++++++++++++++++++++++')
//   // ignore favicon
//   if (ctx.path === '/favicon.ico') return;

//   let n = ctx.session.views || 0;
//   ctx.session.views = ++n;
//   ctx.body = n + ' views';
// });

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
