const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());

const { json } = require('body-parser');
const bodyParsed=require('body-parser');
app.use(bodyParsed.json());

const router=require('./routes/product.js');
const sequelize = require('./util/db.js');
app.use(router);

sequelize.sync({force:true});



app.listen(5600);