const User = require('../models/user.js');


exports.getUserByName = async(name)=>{
    if(!name){
        return {}
    }
    return await User.findOne({
        where:{
            name:name
        }
    })
}

exports.createUser = async(user)=>{
    if(!user){
        return {}
    }
    await User.create(user)
}































