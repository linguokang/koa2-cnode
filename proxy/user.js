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

exports.getUserByEmail = async(email)=>{
    if(!email){
        return {}
    }
    return await User.findOne({
        where:{
            email:email
        }
    })
}

exports.getUserById = async(id)=>{
    if(!id){
        return {}
    }
    return await User.findOne({
        where:{
            id:id
        }
    })
}



























