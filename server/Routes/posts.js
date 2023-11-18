const express = require('express')
const router =express.Router()
const User = require('../models/Posts')

//gets back all the posts 
router.get("/",async (req,res)=>{
    try{
        const posts= await User.find();
        res.json(posts)
    }
    catch(error)
    {
        res.json({message:error})
    }
})

//submits a post 
router.post("/",async(req,res)=>{
    const post = new User({
        title:req.body.title,
        description:req.body.description
    });
    try{
        console.log(post)
        const savedPost = await post.save() //this returns a promise
        res.json(savedPost)
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
        const specificpost =await User.findById(req.params.postId);
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
       
        const removedPost =await  User.deleteOne( { _id: req.params.postId });
        res.json(removedPost)
    }
    catch(error)
    {
        res.json({message:error})
    }
  
});

//update a post
router.patch('/:postId',async(req,res)=>{
    try{
        const updatedpost=await User.updateOne(
            {_id:req.params.postId},
            {$set:{title:req.body.title}}
            );
            res.json(updatedpost)
    }
    catch(error)
    {
        res.json({message:error})
    }
  
});
module.exports =router;