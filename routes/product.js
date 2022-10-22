const express=require('express');
const routes=express.Router();
const controller=require('../controllers/orderController.js');

routes.post('/cartDetails',controller.postCartDetails);
routes.delete('/orderDetails/:orderid',controller.deleteOrderDetails);
routes.get('/getCartDetails',controller.getCartDetails);

routes.get('/purchased',controller.purchased);


module.exports=routes;