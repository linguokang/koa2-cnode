const Router = require('koa-router')
const topic = require('../controller/topic');

const router = new Router({
    prefix: '/topic'
})

router
    .get('/create',topic.getCreateTopic)

    .post('/create',topic.createTopic)







module.exports = router




