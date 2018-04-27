const Topic = require('../proxy/topic')

exports.getCreateTopic = async (ctx) => {
    let position = {}
    if (typeof ctx.session.user !== 'undefined') {
        position = 'topicCreate'
        await ctx.render('topicCreate', {
            title: '发布界面',
            session: ctx.session,
            position: position,
        })
    }
}

exports.createTopic = async (ctx) => {
    let message = {};
    message.result = false;
  
    try {
        let topicInfo = {
            user_id: ctx.session.user.id,
            last_reply_id: ctx.session.user.id,
            title: ctx.request.body.title,
            content: ctx.request.body.content,
        }

        await Topic.creatTopic(topicInfo)

        message.result = true;
        ctx.body = message;
        return;
    }
    catch (err) {
        message.message = '发布出错';
        ctx.body = message;
        return;
    }
}























