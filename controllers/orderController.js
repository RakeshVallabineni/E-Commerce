const ORDER=require('../models/orderModel.js');


exports.postCartDetails=(req,res,next)=>{
    const requestBody=req.body;
    ORDER.create({
        itemname:requestBody.itemname,
        prices:requestBody.prices,
        image:requestBody.image
    }).then(response=>{res.status(200).json({ORDER:response})}).catch(err=>console.log(err));
    
    
}

exports.deleteOrderDetails=(req,res,next)=>{
    const param= req.params.orderid;
    console.log(param);
    ORDER.destroy({where:{id:param}}).then(()=>{res.status(200);}).catch(err=>{console.log(err)});
}


exports.getCartDetails=async (req,res,next)=>{
    try{
      let response=await ORDER.findAll();
      console.log(response)
      res.status(200).json({res:response});
    }
    catch(err){
      console.log(err);
    }

}



exports.purchased=(req,res,next)=>{

  try{
     let orderResponse=ORDER.destroy({where:{},truncate:true});
     res.status(200).json({message:'Order Placed Successfully'})
  }
  
  catch(err){
    console.log(err);
  }
}