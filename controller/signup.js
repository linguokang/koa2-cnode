
const User = require('../proxy/user');
// const User = require('../models/user');


exports.signUp = async(ctx) => {
    
    let data = ctx.request.body
    let message = {};
    message.result = false;

// 检查用户名是否被占用
    let isUsernameExist = await User.getUserByName(data.name)
    if(isUsernameExist){
        message.message = '用户名已注册';
        ctx.body = message;
        return;
    }
// check is email exist
    let isEmailExist = await User.getUserByEmail(data.email)

    let userInfo = {
        name:data.name,
        password:data.password,
        email:data.email
    }
    await User.createUser(userInfo)
      message.result = true;
      ctx.body = message;
      return;
}




























