
const sequlize = require('./sequelize')
const Sequlize = require('sequelize')

const User = sequlize.define('user',{
    name:{
        type:Sequlize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequlize.STRING,
        allowNull:false
    }
})

User.sync();

module.exports = User;





