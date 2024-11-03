import postModel from "../model/postModel.js";


//1------create a post initially it set to default we can add multer to add image dynamically
export const createPost = async(req,res)=>{
    const {id} = req.params
     
  const postCreate =new postModel({
    userId:id
  })
 await postCreate.save()

 return res.status(201).json({message:"post created successfully" , postCreate})
    
}

//2-----get all post 

export const getAllPost = async(req,res)=>{
  const allPost = await postModel.find({})
  return res.status(200).json({message:"successfully get all post",data:allPost})
}

