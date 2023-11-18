const express = require('express')
const router =express.Router()
const Product = require('../models/Product')

//gets back all the posts 
router.get("/",async (req,res)=>{
    try{
        const posts= await Product.find();
        res.json(posts)
    }
    catch(error)
    {
        res.json({message:error})
    }
})

//submits a post 
router.post("/",async(req,res)=>{
    const product = new Product({
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        price:req.body.price,
        quantity:req.body.quantity,
    });
    const tell = await Product.findOne({
        name:req.body.name
    });
  
    try{
        if(tell)
        {
            res.json({message:"already exists",id:tell._id,quantity:tell.quantity})
            console.log({message:"already exists",id:tell._id,quantity:tell.quantity})
        }
        else{
            console.log(product)
            const savedProduct = await product.save() //this returns a promise
            res.json(savedProduct)
        }
      
    }
    catch(error)
    { 
        res.json({message:error})
        console.log(error)
    }
})

//get back a specific post 
router.get('/:postId',async (req,res)=>{
    try{
        const specificpost =await Product.findById(req.params.postId);
        console.log("got a specific post ")
        res.json(specificpost);
    }
    catch(error)
    {
        res.json({message:error})
    }
})

//delete post 
router.delete('/:postId',async(req,res)=>{
    try{
        console.log("removing something ",req.params.postId)
        const removedPost =await  Product.deleteOne( { _id: req.params.postId });
        res.json(removedPost)
    }
    catch(error)
    {
        res.json({message:error})
    }
  
});

router.delete('/',async(req,res)=>{
    try{
       
        await  Product.deleteMany({});
        res.status(200).json({ message: 'All users deleted successfully.' });
    }
    catch(error)
    {
        res.status(500).json({ error: 'Internal Server Error' });
    }
  
});

//update a post
router.patch('/:postId',async(req,res)=>{
    try{
        console.log("hey i am the update backend");
        console.log(req.params.postId," ",req.body)
        const updatedpost=await Product.updateOne(
            {_id:req.params.postId},
            {
                $set:{
                        quantity:req.body.quantity,
                }
            
            }
            );
            res.json(updatedpost)
    }
    catch(error)
    {
        res.json({message:error})
    }
  
});
module.exports =router;