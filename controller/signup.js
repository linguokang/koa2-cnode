
const User = require('../proxy/user');
// const User = require('../models/user');


exports.signUp = async(ctx) => {
    
    let data = ctx.request.body
    let message = {};
    message.result = false;

// 检查用户名是否被占用
    // let getUserByName = async(name)=>{
    //     if(!name){
    //         return {}
    //     }
    //     return await User.findOne({
    //         where:{
    //             name:name
    //         }
    //     })
    // }
    let isUsernameExist = await User.getUserByName(data.name)
    if(isUsernameExist){
        message.message = '用户名已注册';
        ctx.body = message;
        return;
    }

    let userInfo = {
        name:data.name,
        password:data.password
    }
    // let createUser = async(user)=>{
    //     if(!user){
    //         return {}
    //     }
    //     await User.create(user)
    // }
    await User.createUser(userInfo)
      message.result = true;
      ctx.body = message;
      return;
}




























