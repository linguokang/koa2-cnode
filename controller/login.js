const User = require('../proxy/user')

exports.login = async(ctx) => {

    let data = ctx.request.body
    let message = {};
    message.result = false;
    // ctx.body = message;
    // return;
  
    
    const userInfo = await User.getUserByEmail(data.email);
    console.log(userInfo)
    if(!userInfo){
        message.message = '用户不存在！'
        ctx.body = message;
        return
    }
    if(userInfo.password != data.password){
        message.message = '密码错误！'
        ctx.body = message;
        return
    }
    ctx.session.user = userInfo;

    message.result = true;
    console.log("登录成功");
    ctx.body = message;
}





























