const Sequelize=require('sequelize');
const sequelize = require('../util/db.js');

const ORDER=sequelize.define('orderD',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    itemname:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    prices:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

module.exports=ORDER;